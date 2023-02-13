import db from '../static/db.js';
import twitter from '../static/twitter.js';
import tweet from './tweet.js';


export default {
	template: /*html*/`
<nav ref="navbar" class="navbar fixed-top bg-body-tertiary">
	<div class="container-fluid">
		<a class="navbar-brand" href="#" @click.prevent="reload">{{ list?.name || 'Socrates' }}</a>
		<span class="navbar-text badge" :class="tweets.length ? 'text-bg-primary' : 'text-bg-danger'">
			{{ unread }}
		</span>
	</div>
</nav>

<div class="pt-5 mt-3">
	<div v-for="tweet in tweets" :key="tweet.rest_id">
		<div :id="tweet.rest_id" class="card mb-2 mx-auto" style="max-width: 598px;">
			<tweet :tweet="tweet"></tweet>
		</div>
	</div>
</div>
	`,
	data() {
		return {
			lists: [],
			tweets: [],

			unread: 0,
		};
	},
	computed: {
		list() {
			return this.lists.find(list => this.listId === list.rest_id);
		},
		listId() {
			return window.localStorage.getItem('listId') || '1242797058806943744';
		},
		listTable() {
			return `list-${this.listId}`;
		}
	},
	components: {
		tweet
	},
	mounted() {
		let schema = {
			lists: 'rest_id',
			[this.listTable]: 'rest_id'
		};
		db('Socrates', 6, schema)
			.then(db => {
				return db.get('lists')
					.then(lists => {
						this.lists = lists;
						console.log('lists', lists, this.list);

						let list = this.list;
						if (list && list.top)
							return db.get(this.listTable).then(cached => {
								console.log('old tweets', cached?.length);

								return twitter.allTweets(this.listId, list.top).then(({ tweets, cursors }) => {
									console.log('new tweets', tweets?.length, cursors);

//									let tx = db.readwrite('lists', this.listTable)
//										.commit((tx) => {
											db.put(this.listTable, ...tweets);
											db.put('lists', { rest_id: this.listId, top: cursors.top });
//										})
//										.then(res => console.log('commit', res));

									return [...tweets, ...cached.reverse()];
								});
							});
						else
							return twitter.allTweets(this.listId, {}).then(({ tweets, cursors }) => {
								console.log('all tweets', tweets?.length, cursors);

//								let tx = db.readwrite('lists', this.listTable)
//									.commit((tx) => {
										db.put(this.listTable, ...tweets);
										db.put('lists', { rest_id: this.listId, top: cursors.top, bottom: cursors.bottom });
//									})
//									.then(res => console.log('commit', res));

								return tweets;
							});
					});
			})
			.then((tweets) => {
				console.log('tweets', tweets?.length);

				this.tweets = tweets || [];

				this.$nextTick(() => {
					this.scroll(document.getElementById(window.localStorage.getItem('lastId')));

					window.onscroll = this.onScroll;
				});
			})
			.catch(err => console.log('error', err));
	},
	methods: {
		reload() {
			location.reload();
		},
		scroll(el) {
			if (!el)
				return;

//			el.scrollIntoView(true);

			let offset = document.getElementsByClassName('navbar')[0].getBoundingClientRect().bottom;
			window.scrollTo({ top: el.getBoundingClientRect().top - offset - 8 });
		},
		onScroll() {
			let offset = document.getElementsByClassName('navbar')[0].getBoundingClientRect().bottom;

			let tweets = document.getElementsByClassName('card');
			let i = Array.from(tweets).findIndex(el => el.getBoundingClientRect().bottom > offset);

			this.unread = i;
			window.localStorage.setItem('lastId', tweets[i].id);
		}
	}
}