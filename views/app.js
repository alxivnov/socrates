import store from '../static/store.js';
import tweet from './tweet.js';


export default {
	template: /*html*/`
<nav ref="navbar" class="navbar fixed-top bg-body-tertiary navbar-expand">
	<div class="container-fluid">
		<a class="navbar-brand" href="#" @click.prevent="reload">Socrates</a>

		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNavDropdown">
			<ul class="navbar-nav">
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						{{ lists[listId]?.name || lists[listId]?.rest_id }}
					</a>
					<ul class="dropdown-menu">
						<li v-for="listId in Object.keys(lists)" :key="listId">
							<a class="dropdown-item" href="#" @click.prevent="select(lists[listId])">
								{{ lists[listId]?.name || lists[listId]?.rest_id }}
							</a>
						</li>
					</ul>
				</li>
			</ul>
			<form class="d-flex" role="search">
				<!--<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">-->
				<button class="btn btn-sm btn-outline-success ms-2" type="submit" @click.prevent="add">
					<i class="bi bi-plus"></i>
				</button>
				<button class="btn btn-sm btn-outline-danger ms-2" type="submit" @click.prevent="remove">
					<i class="bi bi-dash"></i>
				</button>
			</form>
		</div>

		<span class="navbar-text badge" :class="tweets.length ? 'text-bg-primary' : 'text-bg-secondary'">
			{{ unread }}
		</span>
	</div>
</nav>

<div class="pt-5 mt-3">
	<div v-for="(tweet, index) in tweets" :key="tweet.rest_id">
		<div :id="tweet.rest_id" class="card border-secondary mb-3 mx-auto" style="max-width: 598px;">
			<tweet :tweet="tweet" :index="index"></tweet>
		</div>
	</div>
</div>
	`,
	components: {
		tweet
	},
	data() {
		return {
			lists: {},
			tweets: [],

			unread: 0,

			listId: store.getListId(),
		};
	},
	mounted() {
		store.openDB()
			.then(db => {
				return store.loadLists().then(lists => {
					this.lists = lists;

					return store.loadTweets(lists[this.listId]).then(tweets => {
						this.tweets = tweets;

						this.$nextTick(() => {
							this.scroll(store.getTweetId(this.listId));

							window.onscroll = this.onScroll;
						});
					});
				});
			})
			.catch(err => console.log('error', err));
	},
	methods: {
		add() {
			store.addLists();
		},
		remove() {

		},
		select(list) {
			this.listId = store.setListId(list);
			this.tweets = [];

			store.loadTweets(list).then(tweets => {
				this.tweets = tweets;

				this.$nextTick(() => {
					this.scroll(store.getTweetId(list));
				});
			});
		},
		reload() {
			location.reload();
		},
		scroll(tweetId) {
			let el = document.getElementById(tweetId);
			if (!el)
				return;

//			el.scrollIntoView(false);

			let offset = document.getElementsByClassName('navbar')[0].getBoundingClientRect().bottom;
			window.scrollTo({ top: el.getBoundingClientRect().top - offset - 8 });
		},
		onScroll() {
			let offset = document.getElementsByClassName('navbar')[0].getBoundingClientRect().bottom;

			let tweets = document.getElementsByClassName('card');
			let i = Array.from(tweets).findIndex(el => el.getBoundingClientRect().top > offset);

			this.unread = Math.max(0, i);

			if (i < 0)
				return;

			store.setTweetId(this.listId, tweets[i].id);
		}
	}
}