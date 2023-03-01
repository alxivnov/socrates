import db from '../static/db.js';
import twitter from '../static/twitter.js';

const store = {
	db: null,

	lists: {},
	tweets: [],

	ids: [],

	addLists() {
		let lists = {
			'1242796219627421708': 'Apple',
			'1242797058806943744': 'Macro',
			'1373227598386499587': 'Analysis',
			'1375002672244342791': 'Protocols',
			'1602994329760448513': 'Degen',
		};
		this.db.put('lists', ...Object.keys(lists).map(rest_id => ({ rest_id, name: lists[rest_id] })));
		Object.keys(lists).forEach(rest_id => this.db.createObjectStore(`list-${rest_id}`, { key_path: 'rest_id' }));

		// store.loadLists().then(lists => {
		// 	this.lists = lists;

		// 	this.setListId();
		// });
	},
	openDB() {
		let schema = {
			lists: 'rest_id',
			'list-1242796219627421708': 'rest_id',
			'list-1242797058806943744': 'rest_id',
			'list-1373227598386499587': 'rest_id',
			'list-1375002672244342791': 'rest_id',
			'list-1602994329760448513': 'rest_id',
		};
		return db('Socrates', 7, schema).then(db => {
			console.log('db', db);

			this.db = db;

			return db;
		});
	},
	loadLists() {
		return this.db.get('lists').then(arr => {
			let lists = arr.reduce((prev, curr) => ({ ...prev, [curr.rest_id]: curr }), {});

			console.log('lists', lists);

			this.lists = lists;

			return lists;
		});
	},
	loadTweets(list) {
		let listId = list.rest_id;
		let topCursor = list.top;

		let load = topCursor
			? this.db.get(`list-${listId}`).then(cached => {
				console.log('old tweets', cached?.length);

				return twitter.allTweets(listId, topCursor).then(({ tweets, cursors }) => {
					console.log('new tweets', tweets?.length, cursors);

					this.db.put(`list-${listId}`, ...tweets);
					this.db.put('lists', { ...list, top: cursors.top });

					let old = Math.max(0, cached.length - (1000 - tweets.length));
					this.db.delete(`list-${listId}`, ...cached.splice(0, old))
					return [...tweets, ...cached.reverse()];
				});
			})
			: twitter.allTweets(listId, {}).then(({ tweets, cursors }) => {
				console.log('all tweets', tweets?.length, cursors);

				this.db.put(`list-${listId}`, ...tweets);
				this.db.put('lists', { ...list, top: cursors.top, bottom: cursors.bottom });

				return tweets;
			});
		return load.then((tweets) => {
			console.log('tweets', tweets?.length);

			this.tweets = tweets || [];

			this.ids = tweets.flatMap(tweet => {
				let quote = tweet.quoted_status_result?.result			// TweetWithVisibilityResults
					|| tweet.quoted_status_result						// quoted
					|| tweet.legacy.retweeted_status_result;

				return [tweet, tweet.card, quote, quote?.card]
					.map(el => el ? el.rest_id : null);
			});

			return tweets;
		});
	},

	listId: undefined,
	tweetId: undefined,

	getListId() {
		this.listId = new URLSearchParams(window.location.search).get('list') || window.localStorage.getItem('list_id');
		return this.listId;
	},
	getTweetId(list) {
		let listId = list && list.rest_id || list;

		this.tweetId = new URLSearchParams(window.location.search).get('tweet') || window.localStorage.getItem(`tweet_id_${listId}`) || window.localStorage.getItem(`last_id_${listId}`);
		return this.tweetId;
	},
	setListId(list) {
		let listId = list && list.rest_id || list;

		if (this.listId == listId)
			return listId;

		window.localStorage.setItem('list_id', listId);

		let params = { list: listId };
		let test = window.location.search.includes('test') ? '?test&' : '?';
		window.history.replaceState(params, '', `./${test}${new URLSearchParams(params)}`);

		this.listId = listId;

		return listId;
	},
	setTweetId(list, tweet) {
		let listId = list.rest_id || list;
		let tweetId = tweet.rest_id || tweet;

		if (this.tweetId == tweetId)
			return tweetId;

		window.localStorage.setItem(`tweet_id_${listId}`, tweetId);
		window.localStorage.setItem(`last_id_${listId}`, tweetId);

		let params = { list: listId, tweet: tweetId };
		let test = window.location.search.includes('test') ? '?test&' : '?';
		window.history.replaceState(params, '', `./${test}${new URLSearchParams(params)}`);

		this.tweetId = tweetId;

		return tweetId;
	},
};

export default store;
