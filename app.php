<?php
	header('Content-Type: application/json');
	header('Access-Control-Allow-Origin: *');

	if (array_key_exists('test', $_GET)) {
		print(file_get_contents('data.json'));

		exit();
	}

//	header('Content-Encoding: br, gzip, deflate');

	if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
		exit();
	}

	$component = 'ZvalF7ycjyP5yMyno7GcoQ';
	$variables = array(
		'listId' => '1242797058806943744',
		'count' => 20,
//		'cursor' => 'HBaIgLGJ5qO0hy0AAA==',
		'withSuperFollowsUserFields' => true,
		'withDownvotePerspective' => false,
		'withReactionsMetadata' => false,
		'withReactionsPerspective' => false,
		'withSuperFollowsTweetFields' => true
	);
	$features = array(
		'responsive_web_twitter_blue_verified_badge_is_enabled' => true,
		'verified_phone_label_enabled' => false,
		'responsive_web_graphql_timeline_navigation_enabled' => true,
		'longform_notetweets_consumption_enabled' => false,
		'tweetypie_unmention_optimization_enabled' => true,
		'vibe_api_enabled' => true,
		'responsive_web_edit_tweet_api_enabled' => true,
		'graphql_is_translatable_rweb_tweet_is_translatable_enabled' => true,
		'view_counts_everywhere_api_enabled' => true,
		'freedom_of_speech_not_reach_appeal_label_enabled' => false,
		'standardized_nudges_misinfo' => true,
		'tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled' => false,
		'interactive_text_enabled' => true,
		'responsive_web_text_conversations_enabled' => false,
		'responsive_web_enhance_cards_enabled' => false
	);
	$headers = array(
		'Content-Type' => 'application/json',
		'Accept' => '*/*',
		'Authorization' => 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
		'Accept-Language' => 'ru',
		'Accept-Encoding' => 'gzip, deflate, br',
		'Host' => 'api.twitter.com',
		'Origin' => 'https://twitter.com',
		'User-Agent' => 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Safari/605.1.15',
		'Referer' => 'https://twitter.com/',
		'Connection' => 'keep-alive',
//		'Cookie' => ' _ga=GA1.2.1240363675.1675519023; _gid=GA1.2.1341584294.1675519023; gt=1621902839067906050; ct0=7c8c1ffd66b7eb29fc094a20fd3cc6b3; guest_id=v1%3A167551862671278294; guest_id_ads=v1%3A167551862671278294; guest_id_marketing=v1%3A167551862671278294; personalization_id="v1_wz7iLGaZ4qZ9JUPwT76mwg=="',
//		'x-guest-token' => '1621902839067906050',
		'x-twitter-client-language' => 'ru',
		'x-csrf-token' => '7c8c1ffd66b7eb29fc094a20fd3cc6b3',
		'x-twitter-active-user' => 'yes'
	);

	if (array_key_exists('comp', $_GET)) {
		$component = $_GET['comp'];
	}
	if (array_key_exists('list', $_GET)) {
		$variables['listId'] = $_GET['list'];
	}
	if (array_key_exists('count', $_GET)) {
		$variables['count'] = $_GET['count'];
	}
	if (array_key_exists('cursor', $_GET)) {
		$variables['cursor'] = $_GET['cursor'];
	}
	if (array_key_exists('bearer', $_GET)) {
		$variables['Authorization'] = 'Bearer '.$_GET['bearer'];
	}
	$func = function ($key, $val) {
		return $key.': '.$val;
	};
	$header = array_map($func, array_keys($headers), array_values($headers));

	$url = 'https://api.twitter.com/graphql/'.$component.'/ListLatestTweetsTimeline?variables='.urlencode(json_encode($variables)).'&features='.urlencode(json_encode($features));

//	return print $url;
	$curl = curl_init();
	curl_setopt($curl, CURLOPT_URL, $url);
	curl_setopt($curl, CURLOPT_HTTPHEADER, $header);
	curl_setopt($curl, CURLOPT_HEADER, true);
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
	$res = curl_exec($curl);
	$header_size = curl_getinfo($curl, CURLINFO_HEADER_SIZE);
	curl_close($curl);

	$headers = substr($res, 0, $header_size);
	$body = substr($res, $header_size);

	foreach (explode(PHP_EOL, $headers) as $header)
		if (strpos($header, 'content-encoding') !== false)
			header($header, true);
	print($body);
?>