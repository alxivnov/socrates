import moment from 'https://cdn.jsdelivr.net/npm/moment@2.29.4/+esm';

const a = (href, content) => `<a href="${href}" target="_blank">${content}</a>`;

export default {
	template: /* html */`
<div class="card-body">
	<div class="card-title">
		<h5>
			<a class="text-light-emphasis" :href="link(tweet, 'user')" target="_blank">{{ tweet.core.user_results.result.legacy.name }}</a>
			@{{ tweet.core.user_results.result.legacy.screen_name }}
		</h5>
		<h6 class="card-subtitle mb-2 text-muted">{{ time(tweet) }}</h6>
	</div>
	<p v-if="!tweet.legacy.retweeted_status_result" class="card-text" v-html="html(tweet)"></p>

	<div v-if="quote" class="border rounded p-3 mt-3">
		<div class="card-title">
			<h5>
				<a class="text-light-emphasis" :href="link(quote, 'user')" target="_blank">{{ quote.core.user_results.result.legacy.name }}</a>
				@{{ quote.core.user_results.result.legacy.screen_name }}
			</h5>
			<h6 class="card-subtitle mb-2 text-muted">{{ time(quote) }}</h6>
		</div>
		<p class="card-text" v-html="html(quote)"></p>
		<!--<a v-if="!tweet.legacy.retweeted_status_result" class="card-link" :href="link(quote)" target="_blank">Open</a>-->
	</div>

	<!--<a class="card-link" :href="link(tweet, 'status')" target="_blank">Open</a>
	<a class="card-link" href="#">Bookmark</a>-->
</div>
	`,
	props: {
		tweet: Object
	},
	computed: {
		quote() {
			return this.tweet.quoted_status_result?.result || this.tweet.legacy.retweeted_status_result?.result;
		}
	},
	methods: {
		link(tweet, entity) {
			return entity == 'status'
				? `https://twitter.com/${tweet.core.user_results.result.legacy.screen_name}/status/${tweet.rest_id}`
				: entity == 'hashtag'
					? `https://twitter.com/hashtag/${tweet}`
					: `https://twitter.com/${typeof (tweet) == 'string' ? tweet : tweet.core.user_results.result.legacy.screen_name}`;
		},
		html(tweet) {
			let entities = tweet.legacy.entities;
			var html = this.text(tweet);
			html = entities.media?.reduce((prev, curr) => prev.replace(curr.url, a(curr.expanded_url, curr.display_url)), html) || html;
			html = entities.urls.reduce((prev, curr) => prev.replace(curr.url, a(curr.expanded_url, curr.display_url)), html);
			html = entities.user_mentions.reduce((prev, curr) => prev.replace(`@${curr.screen_name}`, a(this.link(curr.screen_name, 'user'), `@${curr.screen_name}`)), html);
			html = entities.hashtags.reduce((prev, curr) => prev.replace(`#${curr.text}`, a(this.link(curr.text, 'hashtag'), `#${curr.text}`)), html);
			return html;
//			let el = new DOMParser().parseFromString(tweet.legacy.full_text, "text/html").documentElement;
//			twemoji.parse(el);
//			return el.textContent;
		},
		text(tweet) {
			return tweet.legacy.full_text.replace(/&amp;/g, '&');
		},
		time(tweet) {
			let date = new Date(tweet.legacy.created_at);
			return moment(date).format('DD.MM.YYYY HH:mm');
		},
	}
}