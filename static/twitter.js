export default {
	tweets(list, cursor = undefined) {
		let query = new URLSearchParams(window.location.search);
		let test = query.has('test');

		let url = test
			? './static/data/test.json'
			: `http://aristotle.1gb.ru/app.php?${new URLSearchParams(JSON.parse(JSON.stringify({
				list,
				cursor,
				count: 100
			})))}`;

		console.log(url);

		return fetch(url)
			.then(res => res.json())
			.then(json => {
//				console.log(url, json);

				let entries = json?.data?.list?.tweets_timeline?.timeline?.instructions?.[0]?.entries || [];
				let tweets = entries
					.map(el => el.content?.itemContent?.tweet_results?.result)
					.filter(el => el && el.rest_id);
				let cursors = entries
					.filter(el => el.content?.__typename == 'TimelineTimelineCursor')
					.reduce((prev, curr) => ({ ...prev, [curr.content.cursorType.toLowerCase()]: curr.content.value }), {});

				console.log(url, tweets, cursors);

				return {
					tweets,
					cursors: test ? {} : cursors
				};
			});
	},
	allTweets(list, prev) {
		let all = typeof (prev) == 'object';

		return this.tweets(list, all ? prev?.cursors?.bottom : prev).then(({ tweets, cursors }) => {
			if (all) {
				let curr = {
					tweets: [
						...(prev?.tweets || []),
						...tweets
					],
					cursors: {
						top: prev?.cursors?.top || cursors.top,
						bottom: cursors.bottom
					}
				};
				return (tweets.length && cursors.bottom)
					? this.allTweets(list, curr)
					: curr;
			} else {
				return {
					tweets,
					cursors
				};
			}
		});
	}
}