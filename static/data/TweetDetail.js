export default {
	url: 'https://api.twitter.com/graphql/AD1BmaLl2uBoFR6JoQPNgg/TweetDetail?variables={"focalTweetId":"1630868427882594304","referrer":"profile","with_rux_injections":false,"includePromotedContent":true,"withCommunity":true,"withQuickPromoteEligibilityTweetFields":true,"withBirdwatchNotes":true,"withSuperFollowsUserFields":true,"withDownvotePerspective":false,"withReactionsMetadata":false,"withReactionsPerspective":false,"withSuperFollowsTweetFields":true,"withVoice":true,"withV2Timeline":true}&features={"responsive_web_twitter_blue_verified_badge_is_enabled":true,"responsive_web_graphql_exclude_directive_enabled":false,"verified_phone_label_enabled":false,"responsive_web_graphql_timeline_navigation_enabled":true,"responsive_web_graphql_skip_user_profile_image_extensions_enabled":false,"tweetypie_unmention_optimization_enabled":true,"vibe_api_enabled":true,"responsive_web_edit_tweet_api_enabled":true,"graphql_is_translatable_rweb_tweet_is_translatable_enabled":true,"view_counts_everywhere_api_enabled":true,"longform_notetweets_consumption_enabled":true,"tweet_awards_web_tipping_enabled":false,"freedom_of_speech_not_reach_fetch_enabled":false,"standardized_nudges_misinfo":true,"tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled":false,"interactive_text_enabled":true,"responsive_web_text_conversations_enabled":false,"longform_notetweets_richtext_consumption_enabled":false,"responsive_web_enhance_cards_enabled":false}',
	variables: {
		"focalTweetId": "1630868427882594304",
		"referrer": "profile",
		"with_rux_injections": false,
		"includePromotedContent": true,
		"withCommunity": true,
		"withQuickPromoteEligibilityTweetFields": true,
		"withBirdwatchNotes": true,
		"withSuperFollowsUserFields": true,
		"withDownvotePerspective": false,
		"withReactionsMetadata": false,
		"withReactionsPerspective": false,
		"withSuperFollowsTweetFields": true,
		"withVoice": true,
		"withV2Timeline": true
	},
	features: {
		"responsive_web_twitter_blue_verified_badge_is_enabled": true,
		"responsive_web_graphql_exclude_directive_enabled": false,
		"verified_phone_label_enabled": false,
		"responsive_web_graphql_timeline_navigation_enabled": true,
		"responsive_web_graphql_skip_user_profile_image_extensions_enabled": false,
		"tweetypie_unmention_optimization_enabled": true,
		"vibe_api_enabled": true,
		"responsive_web_edit_tweet_api_enabled": true,
		"graphql_is_translatable_rweb_tweet_is_translatable_enabled": true,
		"view_counts_everywhere_api_enabled": true,
		"longform_notetweets_consumption_enabled": true,
		"tweet_awards_web_tipping_enabled": false,
		"freedom_of_speech_not_reach_fetch_enabled": false,
		"standardized_nudges_misinfo": true,
		"tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": false,
		"interactive_text_enabled": true,
		"responsive_web_text_conversations_enabled": false,
		"longform_notetweets_richtext_consumption_enabled": false,
		"responsive_web_enhance_cards_enabled": false
	},
	response: {
		"data": {
			"threaded_conversation_with_injections_v2": {
				"instructions": [
					{
						"type": "TimelineAddEntries",
						"entries": [
							{
								"entryId": "tweet-1630868427882594304",
								"sortIndex": "7592503608972181503",
								"content": {
									"entryType": "TimelineTimelineItem",
									"__typename": "TimelineTimelineItem",
									"itemContent": {
										"itemType": "TimelineTweet",
										"__typename": "TimelineTweet",
										"tweet_results": {
											"result": {
												"__typename": "Tweet",
												"rest_id": "1630868427882594304",
												"has_birdwatch_notes": false,
												"core": {
													"user_results": {
														"result": {
															"__typename": "User",
															"id": "VXNlcjoyNDMzMTg5OTU=",
															"rest_id": "243318995",
															"affiliates_highlighted_label": {},
															"has_graduated_access": true,
															"is_blue_verified": true,
															"legacy": {
																"blocked_by": false,
																"blocking": false,
																"follow_request_sent": false,
																"followed_by": false,
																"following": false,
																"muting": false,
																"notifications": false,
																"protected": false,
																"can_dm": false,
																"can_media_tag": true,
																"created_at": "Wed Jan 26 19:56:43 +0000 2011",
																"default_profile": false,
																"default_profile_image": false,
																"description": "Citizen journalist.",
																"entities": {
																	"description": {
																		"urls": []
																	}
																},
																"fast_followers_count": 0,
																"favourites_count": 1039,
																"followers_count": 268119,
																"friends_count": 17,
																"has_custom_timelines": true,
																"is_translator": false,
																"listed_count": 3714,
																"location": "Zurich, Schweiz",
																"media_count": 37771,
																"name": "Russian Market",
																"normal_followers_count": 268119,
																"pinned_tweet_ids_str": [],
																"possibly_sensitive": false,
																"profile_banner_extensions": {
																	"mediaColor": {
																		"r": {
																			"ok": {
																				"palette": [
																					{
																						"percentage": 65.23,
																						"rgb": {
																							"blue": 233,
																							"green": 249,
																							"red": 248
																						}
																					},
																					{
																						"percentage": 16.64,
																						"rgb": {
																							"blue": 26,
																							"green": 28,
																							"red": 28
																						}
																					},
																					{
																						"percentage": 8.34,
																						"rgb": {
																							"blue": 64,
																							"green": 49,
																							"red": 176
																						}
																					},
																					{
																						"percentage": 4.51,
																						"rgb": {
																							"blue": 148,
																							"green": 149,
																							"red": 206
																						}
																					},
																					{
																						"percentage": 0.36,
																						"rgb": {
																							"blue": 2,
																							"green": 187,
																							"red": 222
																						}
																					}
																				]
																			}
																		}
																	}
																},
																"profile_banner_url": "https://pbs.twimg.com/profile_banners/243318995/1672651812",
																"profile_image_extensions": {
																	"mediaColor": {
																		"r": {
																			"ok": {
																				"palette": [
																					{
																						"percentage": 38.68,
																						"rgb": {
																							"blue": 0,
																							"green": 0,
																							"red": 0
																						}
																					},
																					{
																						"percentage": 34.01,
																						"rgb": {
																							"blue": 200,
																							"green": 232,
																							"red": 250
																						}
																					},
																					{
																						"percentage": 7.59,
																						"rgb": {
																							"blue": 1,
																							"green": 0,
																							"red": 112
																						}
																					},
																					{
																						"percentage": 7.2,
																						"rgb": {
																							"blue": 92,
																							"green": 116,
																							"red": 132
																						}
																					},
																					{
																						"percentage": 2.07,
																						"rgb": {
																							"blue": 1,
																							"green": 0,
																							"red": 61
																						}
																					}
																				]
																			}
																		}
																	}
																},
																"profile_image_url_https": "https://pbs.twimg.com/profile_images/1609844491652894720/D25R2I9D_normal.jpg",
																"profile_interstitial_type": "",
																"screen_name": "runews",
																"statuses_count": 138935,
																"translator_type": "regular",
																"verified": false,
																"want_retweets": false,
																"withheld_in_countries": []
															},
															"professional": {
																"rest_id": "1535566116109668352",
																"professional_type": "Business",
																"category": []
															},
															"has_nft_avatar": false,
															"super_follow_eligible": false,
															"super_followed_by": false,
															"super_following": false,
															"business_account": {}
														}
													}
												},
												"unmention_data": {},
												"edit_control": {
													"edit_tweet_ids": [
														"1630868427882594304"
													],
													"editable_until_msecs": "1677666107000",
													"is_edit_eligible": true,
													"edits_remaining": "5"
												},
												"edit_perspective": {
													"favorited": false,
													"retweeted": false
												},
												"is_translatable": false,
												"views": {
													"count": "29802",
													"state": "EnabledWithCount"
												},
												"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
												"note_tweet": {
													"note_tweet_results": {
														"result": {
															"id": "Tm90ZVR3ZWV0OjE2MzA4Njg0Mjc2NTYxMDE4ODk=",
															"text": "A new trend has emerged in Swiss media where there are questions being raised about the disproportionately high level of support being given to Ukrainians in Switzerland. \n\n🇨🇭While the Swiss media generally relies on copying and pasting German articles provided by agencies, when it comes to local news, it is clear that there is a growing trend of people who are tired and frustrated with the authorities providing exaggerated levels of support to Ukrainians.\n\n🧐This trend began with a case where Swiss families were forced to leave their homes to make way for Ukrainians, and now there is another case where the local government is funding private schools (at a cost of 20,000 Swiss francs per year) and villas with stunning views, which the refugees are flaunting on Facebook as evidence of their luxurious lifestyle. \n\nThe majority of Swiss citizens now believe that Switzerland is doing too much for Ukrainians and showering them with lavish gifts. https://t.co/7wH6cILK7a",
															"entity_set": {
																"user_mentions": [],
																"urls": [
																	{
																		"display_url": "insideparadeplatz.ch/2023/03/01/ukr…",
																		"expanded_url": "https://insideparadeplatz.ch/2023/03/01/ukrainer-fluechtlingsfamilie-kind-in-privatschule/",
																		"url": "https://t.co/7wH6cILK7a",
																		"indices": [
																			954,
																			977
																		]
																	}
																],
																"hashtags": [],
																"symbols": []
															}
														}
													}
												},
												"quoted_status_result": {
													"result": {
														"__typename": "Tweet",
														"rest_id": "1630276764462112774",
														"has_birdwatch_notes": false,
														"core": {
															"user_results": {
																"result": {
																	"__typename": "User",
																	"id": "VXNlcjoyNDMzMTg5OTU=",
																	"rest_id": "243318995",
																	"affiliates_highlighted_label": {},
																	"has_graduated_access": true,
																	"is_blue_verified": true,
																	"legacy": {
																		"blocked_by": false,
																		"blocking": false,
																		"follow_request_sent": false,
																		"followed_by": false,
																		"following": false,
																		"muting": false,
																		"notifications": false,
																		"protected": false,
																		"can_dm": false,
																		"can_media_tag": true,
																		"created_at": "Wed Jan 26 19:56:43 +0000 2011",
																		"default_profile": false,
																		"default_profile_image": false,
																		"description": "Citizen journalist.",
																		"entities": {
																			"description": {
																				"urls": []
																			}
																		},
																		"fast_followers_count": 0,
																		"favourites_count": 1039,
																		"followers_count": 268119,
																		"friends_count": 17,
																		"has_custom_timelines": true,
																		"is_translator": false,
																		"listed_count": 3714,
																		"location": "Zurich, Schweiz",
																		"media_count": 37771,
																		"name": "Russian Market",
																		"normal_followers_count": 268119,
																		"pinned_tweet_ids_str": [],
																		"possibly_sensitive": false,
																		"profile_banner_extensions": {
																			"mediaColor": {
																				"r": {
																					"ok": {
																						"palette": [
																							{
																								"percentage": 65.23,
																								"rgb": {
																									"blue": 233,
																									"green": 249,
																									"red": 248
																								}
																							},
																							{
																								"percentage": 16.64,
																								"rgb": {
																									"blue": 26,
																									"green": 28,
																									"red": 28
																								}
																							},
																							{
																								"percentage": 8.34,
																								"rgb": {
																									"blue": 64,
																									"green": 49,
																									"red": 176
																								}
																							},
																							{
																								"percentage": 4.51,
																								"rgb": {
																									"blue": 148,
																									"green": 149,
																									"red": 206
																								}
																							},
																							{
																								"percentage": 0.36,
																								"rgb": {
																									"blue": 2,
																									"green": 187,
																									"red": 222
																								}
																							}
																						]
																					}
																				}
																			}
																		},
																		"profile_banner_url": "https://pbs.twimg.com/profile_banners/243318995/1672651812",
																		"profile_image_extensions": {
																			"mediaColor": {
																				"r": {
																					"ok": {
																						"palette": [
																							{
																								"percentage": 38.68,
																								"rgb": {
																									"blue": 0,
																									"green": 0,
																									"red": 0
																								}
																							},
																							{
																								"percentage": 34.01,
																								"rgb": {
																									"blue": 200,
																									"green": 232,
																									"red": 250
																								}
																							},
																							{
																								"percentage": 7.59,
																								"rgb": {
																									"blue": 1,
																									"green": 0,
																									"red": 112
																								}
																							},
																							{
																								"percentage": 7.2,
																								"rgb": {
																									"blue": 92,
																									"green": 116,
																									"red": 132
																								}
																							},
																							{
																								"percentage": 2.07,
																								"rgb": {
																									"blue": 1,
																									"green": 0,
																									"red": 61
																								}
																							}
																						]
																					}
																				}
																			}
																		},
																		"profile_image_url_https": "https://pbs.twimg.com/profile_images/1609844491652894720/D25R2I9D_normal.jpg",
																		"profile_interstitial_type": "",
																		"screen_name": "runews",
																		"statuses_count": 138935,
																		"translator_type": "regular",
																		"verified": false,
																		"want_retweets": false,
																		"withheld_in_countries": []
																	},
																	"professional": {
																		"rest_id": "1535566116109668352",
																		"professional_type": "Business",
																		"category": []
																	},
																	"has_nft_avatar": false,
																	"super_follow_eligible": false,
																	"super_followed_by": false,
																	"super_following": false,
																	"business_account": {}
																}
															}
														},
														"unmention_data": {},
														"edit_control": {
															"edit_tweet_ids": [
																"1630276764462112774"
															],
															"editable_until_msecs": "1677525044000",
															"is_edit_eligible": true,
															"edits_remaining": "5"
														},
														"edit_perspective": {
															"favorited": false,
															"retweeted": false
														},
														"is_translatable": false,
														"views": {
															"count": "65464",
															"state": "EnabledWithCount"
														},
														"source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
														"legacy": {
															"created_at": "Mon Feb 27 18:40:44 +0000 2023",
															"conversation_id_str": "1630276764462112774",
															"display_text_range": [
																0,
																277
															],
															"entities": {
																"media": [
																	{
																		"display_url": "pic.twitter.com/cN9Hi6RCFz",
																		"expanded_url": "https://twitter.com/runews/status/1630276764462112774/photo/1",
																		"id_str": "1630272331854622720",
																		"indices": [
																			278,
																			301
																		],
																		"media_url_https": "https://pbs.twimg.com/media/Fp_kDFtXsAAtoiO.jpg",
																		"type": "photo",
																		"url": "https://t.co/cN9Hi6RCFz",
																		"features": {
																			"large": {
																				"faces": [
																					{
																						"x": 479,
																						"y": 405,
																						"h": 127,
																						"w": 127
																					},
																					{
																						"x": 817,
																						"y": 421,
																						"h": 123,
																						"w": 123
																					}
																				]
																			},
																			"medium": {
																				"faces": [
																					{
																						"x": 280,
																						"y": 237,
																						"h": 74,
																						"w": 74
																					},
																					{
																						"x": 478,
																						"y": 246,
																						"h": 72,
																						"w": 72
																					}
																				]
																			},
																			"small": {
																				"faces": [
																					{
																						"x": 159,
																						"y": 134,
																						"h": 42,
																						"w": 42
																					},
																					{
																						"x": 271,
																						"y": 139,
																						"h": 40,
																						"w": 40
																					}
																				]
																			},
																			"orig": {
																				"faces": [
																					{
																						"x": 568,
																						"y": 480,
																						"h": 151,
																						"w": 151
																					},
																					{
																						"x": 968,
																						"y": 499,
																						"h": 146,
																						"w": 146
																					}
																				]
																			}
																		},
																		"sizes": {
																			"large": {
																				"h": 1057,
																				"w": 2048,
																				"resize": "fit"
																			},
																			"medium": {
																				"h": 619,
																				"w": 1200,
																				"resize": "fit"
																			},
																			"small": {
																				"h": 351,
																				"w": 680,
																				"resize": "fit"
																			},
																			"thumb": {
																				"h": 150,
																				"w": 150,
																				"resize": "crop"
																			}
																		},
																		"original_info": {
																			"height": 1252,
																			"width": 2426,
																			"focus_rects": [
																				{
																					"x": 0,
																					"y": 0,
																					"w": 2236,
																					"h": 1252
																				},
																				{
																					"x": 0,
																					"y": 0,
																					"w": 1252,
																					"h": 1252
																				},
																				{
																					"x": 0,
																					"y": 0,
																					"w": 1098,
																					"h": 1252
																				},
																				{
																					"x": 0,
																					"y": 0,
																					"w": 626,
																					"h": 1252
																				},
																				{
																					"x": 0,
																					"y": 0,
																					"w": 2426,
																					"h": 1252
																				}
																			]
																		}
																	},
																	{
																		"display_url": "pic.twitter.com/cN9Hi6RCFz",
																		"expanded_url": "https://twitter.com/runews/status/1630276764462112774/photo/1",
																		"id_str": "1630273548626325508",
																		"indices": [
																			278,
																			301
																		],
																		"media_url_https": "https://pbs.twimg.com/media/Fp_lJ6iWcAQkfW2.jpg",
																		"type": "photo",
																		"url": "https://t.co/cN9Hi6RCFz",
																		"features": {
																			"large": {
																				"faces": [
																					{
																						"x": 537,
																						"y": 988,
																						"h": 103,
																						"w": 103
																					},
																					{
																						"x": 407,
																						"y": 973,
																						"h": 135,
																						"w": 135
																					},
																					{
																						"x": 731,
																						"y": 1080,
																						"h": 179,
																						"w": 179
																					}
																				]
																			},
																			"medium": {
																				"faces": [
																					{
																						"x": 314,
																						"y": 578,
																						"h": 60,
																						"w": 60
																					},
																					{
																						"x": 238,
																						"y": 570,
																						"h": 79,
																						"w": 79
																					},
																					{
																						"x": 428,
																						"y": 632,
																						"h": 105,
																						"w": 105
																					}
																				]
																			},
																			"small": {
																				"faces": [
																					{
																						"x": 178,
																						"y": 327,
																						"h": 34,
																						"w": 34
																					},
																					{
																						"x": 135,
																						"y": 322,
																						"h": 45,
																						"w": 45
																					},
																					{
																						"x": 242,
																						"y": 358,
																						"h": 59,
																						"w": 59
																					}
																				]
																			},
																			"orig": {
																				"faces": [
																					{
																						"x": 625,
																						"y": 1149,
																						"h": 120,
																						"w": 120
																					},
																					{
																						"x": 474,
																						"y": 1132,
																						"h": 158,
																						"w": 158
																					},
																					{
																						"x": 851,
																						"y": 1256,
																						"h": 209,
																						"w": 209
																					}
																				]
																			}
																		},
																		"sizes": {
																			"large": {
																				"h": 2048,
																				"w": 1197,
																				"resize": "fit"
																			},
																			"medium": {
																				"h": 1200,
																				"w": 701,
																				"resize": "fit"
																			},
																			"small": {
																				"h": 680,
																				"w": 397,
																				"resize": "fit"
																			},
																			"thumb": {
																				"h": 150,
																				"w": 150,
																				"resize": "crop"
																			}
																		},
																		"original_info": {
																			"height": 2382,
																			"width": 1392,
																			"focus_rects": [
																				{
																					"x": 0,
																					"y": 0,
																					"w": 1392,
																					"h": 780
																				},
																				{
																					"x": 0,
																					"y": 0,
																					"w": 1392,
																					"h": 1392
																				},
																				{
																					"x": 0,
																					"y": 0,
																					"w": 1392,
																					"h": 1587
																				},
																				{
																					"x": 0,
																					"y": 0,
																					"w": 1191,
																					"h": 2382
																				},
																				{
																					"x": 0,
																					"y": 0,
																					"w": 1392,
																					"h": 2382
																				}
																			]
																		}
																	},
																	{
																		"display_url": "pic.twitter.com/cN9Hi6RCFz",
																		"expanded_url": "https://twitter.com/runews/status/1630276764462112774/photo/1",
																		"id_str": "1630275515335450624",
																		"indices": [
																			278,
																			301
																		],
																		"media_url_https": "https://pbs.twimg.com/media/Fp_m8ZGWIAANI-I.jpg",
																		"type": "photo",
																		"url": "https://t.co/cN9Hi6RCFz",
																		"features": {
																			"large": {
																				"faces": [
																					{
																						"x": 340,
																						"y": 412,
																						"h": 36,
																						"w": 36
																					},
																					{
																						"x": 271,
																						"y": 439,
																						"h": 50,
																						"w": 50
																					},
																					{
																						"x": 398,
																						"y": 234,
																						"h": 109,
																						"w": 109
																					}
																				]
																			},
																			"medium": {
																				"faces": [
																					{
																						"x": 340,
																						"y": 412,
																						"h": 36,
																						"w": 36
																					},
																					{
																						"x": 271,
																						"y": 439,
																						"h": 50,
																						"w": 50
																					},
																					{
																						"x": 398,
																						"y": 234,
																						"h": 109,
																						"w": 109
																					}
																				]
																			},
																			"small": {
																				"faces": [
																					{
																						"x": 225,
																						"y": 273,
																						"h": 23,
																						"w": 23
																					},
																					{
																						"x": 179,
																						"y": 291,
																						"h": 33,
																						"w": 33
																					},
																					{
																						"x": 264,
																						"y": 155,
																						"h": 72,
																						"w": 72
																					}
																				]
																			},
																			"orig": {
																				"faces": [
																					{
																						"x": 340,
																						"y": 412,
																						"h": 36,
																						"w": 36
																					},
																					{
																						"x": 271,
																						"y": 439,
																						"h": 50,
																						"w": 50
																					},
																					{
																						"x": 398,
																						"y": 234,
																						"h": 109,
																						"w": 109
																					}
																				]
																			}
																		},
																		"sizes": {
																			"large": {
																				"h": 1001,
																				"w": 1024,
																				"resize": "fit"
																			},
																			"medium": {
																				"h": 1001,
																				"w": 1024,
																				"resize": "fit"
																			},
																			"small": {
																				"h": 665,
																				"w": 680,
																				"resize": "fit"
																			},
																			"thumb": {
																				"h": 150,
																				"w": 150,
																				"resize": "crop"
																			}
																		},
																		"original_info": {
																			"height": 1001,
																			"width": 1024,
																			"focus_rects": [
																				{
																					"x": 0,
																					"y": 200,
																					"w": 1024,
																					"h": 573
																				},
																				{
																					"x": 0,
																					"y": 0,
																					"w": 1001,
																					"h": 1001
																				},
																				{
																					"x": 0,
																					"y": 0,
																					"w": 878,
																					"h": 1001
																				},
																				{
																					"x": 133,
																					"y": 0,
																					"w": 501,
																					"h": 1001
																				},
																				{
																					"x": 0,
																					"y": 0,
																					"w": 1024,
																					"h": 1001
																				}
																			]
																		}
																	},
																	{
																		"display_url": "pic.twitter.com/cN9Hi6RCFz",
																		"expanded_url": "https://twitter.com/runews/status/1630276764462112774/photo/1",
																		"id_str": "1630276130254077955",
																		"indices": [
																			278,
																			301
																		],
																		"media_url_https": "https://pbs.twimg.com/media/Fp_ngL2XwAMwJwI.jpg",
																		"type": "photo",
																		"url": "https://t.co/cN9Hi6RCFz",
																		"features": {
																			"large": {
																				"faces": [
																					{
																						"x": 277,
																						"y": 100,
																						"h": 61,
																						"w": 61
																					},
																					{
																						"x": 387,
																						"y": 38,
																						"h": 69,
																						"w": 69
																					},
																					{
																						"x": 528,
																						"y": 50,
																						"h": 63,
																						"w": 63
																					}
																				]
																			},
																			"medium": {
																				"faces": [
																					{
																						"x": 277,
																						"y": 100,
																						"h": 61,
																						"w": 61
																					},
																					{
																						"x": 387,
																						"y": 38,
																						"h": 69,
																						"w": 69
																					},
																					{
																						"x": 528,
																						"y": 50,
																						"h": 63,
																						"w": 63
																					}
																				]
																			},
																			"small": {
																				"faces": [
																					{
																						"x": 266,
																						"y": 96,
																						"h": 58,
																						"w": 58
																					},
																					{
																						"x": 371,
																						"y": 36,
																						"h": 66,
																						"w": 66
																					},
																					{
																						"x": 507,
																						"y": 48,
																						"h": 60,
																						"w": 60
																					}
																				]
																			},
																			"orig": {
																				"faces": [
																					{
																						"x": 277,
																						"y": 100,
																						"h": 61,
																						"w": 61
																					},
																					{
																						"x": 387,
																						"y": 38,
																						"h": 69,
																						"w": 69
																					},
																					{
																						"x": 528,
																						"y": 50,
																						"h": 63,
																						"w": 63
																					}
																				]
																			}
																		},
																		"sizes": {
																			"large": {
																				"h": 398,
																				"w": 708,
																				"resize": "fit"
																			},
																			"medium": {
																				"h": 398,
																				"w": 708,
																				"resize": "fit"
																			},
																			"small": {
																				"h": 382,
																				"w": 680,
																				"resize": "fit"
																			},
																			"thumb": {
																				"h": 150,
																				"w": 150,
																				"resize": "crop"
																			}
																		},
																		"original_info": {
																			"height": 398,
																			"width": 708,
																			"focus_rects": [
																				{
																					"x": 0,
																					"y": 0,
																					"w": 708,
																					"h": 396
																				},
																				{
																					"x": 310,
																					"y": 0,
																					"w": 398,
																					"h": 398
																				},
																				{
																					"x": 359,
																					"y": 0,
																					"w": 349,
																					"h": 398
																				},
																				{
																					"x": 484,
																					"y": 0,
																					"w": 199,
																					"h": 398
																				},
																				{
																					"x": 0,
																					"y": 0,
																					"w": 708,
																					"h": 398
																				}
																			]
																		}
																	}
																],
																"user_mentions": [],
																"urls": [],
																"hashtags": [],
																"symbols": []
															},
															"extended_entities": {
																"media": [
																	{
																		"display_url": "pic.twitter.com/cN9Hi6RCFz",
																		"expanded_url": "https://twitter.com/runews/status/1630276764462112774/photo/1",
																		"id_str": "1630272331854622720",
																		"indices": [
																			278,
																			301
																		],
																		"media_key": "3_1630272331854622720",
																		"media_url_https": "https://pbs.twimg.com/media/Fp_kDFtXsAAtoiO.jpg",
																		"type": "photo",
																		"url": "https://t.co/cN9Hi6RCFz",
																		"ext_media_color": {
																			"palette": [
																				{
																					"percentage": 59.13,
																					"rgb": {
																						"blue": 242,
																						"green": 234,
																						"red": 232
																					}
																				},
																				{
																					"percentage": 8.31,
																					"rgb": {
																						"blue": 157,
																						"green": 178,
																						"red": 196
																					}
																				},
																				{
																					"percentage": 6.74,
																					"rgb": {
																						"blue": 69,
																						"green": 63,
																						"red": 62
																					}
																				},
																				{
																					"percentage": 4.94,
																					"rgb": {
																						"blue": 134,
																						"green": 61,
																						"red": 41
																					}
																				},
																				{
																					"percentage": 3.37,
																					"rgb": {
																						"blue": 38,
																						"green": 56,
																						"red": 93
																					}
																				}
																			]
																		},
																		"ext_media_availability": {
																			"status": "Available"
																		},
																		"features": {
																			"large": {
																				"faces": [
																					{
																						"x": 479,
																						"y": 405,
																						"h": 127,
																						"w": 127
																					},
																					{
																						"x": 817,
																						"y": 421,
																						"h": 123,
																						"w": 123
																					}
																				]
																			},
																			"medium": {
																				"faces": [
																					{
																						"x": 280,
																						"y": 237,
																						"h": 74,
																						"w": 74
																					},
																					{
																						"x": 478,
																						"y": 246,
																						"h": 72,
																						"w": 72
																					}
																				]
																			},
																			"small": {
																				"faces": [
																					{
																						"x": 159,
																						"y": 134,
																						"h": 42,
																						"w": 42
																					},
																					{
																						"x": 271,
																						"y": 139,
																						"h": 40,
																						"w": 40
																					}
																				]
																			},
																			"orig": {
																				"faces": [
																					{
																						"x": 568,
																						"y": 480,
																						"h": 151,
																						"w": 151
																					},
																					{
																						"x": 968,
																						"y": 499,
																						"h": 146,
																						"w": 146
																					}
																				]
																			}
																		},
																		"sizes": {
																			"large": {
																				"h": 1057,
																				"w": 2048,
																				"resize": "fit"
																			},
																			"medium": {
																				"h": 619,
																				"w": 1200,
																				"resize": "fit"
																			},
																			"small": {
																				"h": 351,
																				"w": 680,
																				"resize": "fit"
																			},
																			"thumb": {
																				"h": 150,
																				"w": 150,
																				"resize": "crop"
																			}
																		},
																		"original_info": {
																			"height": 1252,
																			"width": 2426,
																			"focus_rects": [
																				{
																					"x": 0,
																					"y": 0,
																					"w": 2236,
																					"h": 1252
																				},
																				{
																					"x": 0,
																					"y": 0,
																					"w": 1252,
																					"h": 1252
																				},
																				{
																					"x": 0,
																					"y": 0,
																					"w": 1098,
																					"h": 1252
																				},
																				{
																					"x": 0,
																					"y": 0,
																					"w": 626,
																					"h": 1252
																				},
																				{
																					"x": 0,
																					"y": 0,
																					"w": 2426,
																					"h": 1252
																				}
																			]
																		}
																	},
																	{
																		"display_url": "pic.twitter.com/cN9Hi6RCFz",
																		"expanded_url": "https://twitter.com/runews/status/1630276764462112774/photo/1",
																		"id_str": "1630273548626325508",
																		"indices": [
																			278,
																			301
																		],
																		"media_key": "3_1630273548626325508",
																		"media_url_https": "https://pbs.twimg.com/media/Fp_lJ6iWcAQkfW2.jpg",
																		"type": "photo",
																		"url": "https://t.co/cN9Hi6RCFz",
																		"ext_media_color": {
																			"palette": [
																				{
																					"percentage": 65.45,
																					"rgb": {
																						"blue": 252,
																						"green": 252,
																						"red": 252
																					}
																				},
																				{
																					"percentage": 11.4,
																					"rgb": {
																						"blue": 32,
																						"green": 38,
																						"red": 45
																					}
																				},
																				{
																					"percentage": 4.45,
																					"rgb": {
																						"blue": 107,
																						"green": 148,
																						"red": 195
																					}
																				},
																				{
																					"percentage": 2.9,
																					"rgb": {
																						"blue": 49,
																						"green": 89,
																						"red": 197
																					}
																				},
																				{
																					"percentage": 2.37,
																					"rgb": {
																						"blue": 218,
																						"green": 192,
																						"red": 171
																					}
																				}
																			]
																		},
																		"ext_media_availability": {
																			"status": "Available"
																		},
																		"features": {
																			"large": {
																				"faces": [
																					{
																						"x": 537,
																						"y": 988,
																						"h": 103,
																						"w": 103
																					},
																					{
																						"x": 407,
																						"y": 973,
																						"h": 135,
																						"w": 135
																					},
																					{
																						"x": 731,
																						"y": 1080,
																						"h": 179,
																						"w": 179
																					}
																				]
																			},
																			"medium": {
																				"faces": [
																					{
																						"x": 314,
																						"y": 578,
																						"h": 60,
																						"w": 60
																					},
																					{
																						"x": 238,
																						"y": 570,
																						"h": 79,
																						"w": 79
																					},
																					{
																						"x": 428,
																						"y": 632,
																						"h": 105,
																						"w": 105
																					}
																				]
																			},
																			"small": {
																				"faces": [
																					{
																						"x": 178,
																						"y": 327,
																						"h": 34,
																						"w": 34
																					},
																					{
																						"x": 135,
																						"y": 322,
																						"h": 45,
																						"w": 45
																					},
																					{
																						"x": 242,
																						"y": 358,
																						"h": 59,
																						"w": 59
																					}
																				]
																			},
																			"orig": {
																				"faces": [
																					{
																						"x": 625,
																						"y": 1149,
																						"h": 120,
																						"w": 120
																					},
																					{
																						"x": 474,
																						"y": 1132,
																						"h": 158,
																						"w": 158
																					},
																					{
																						"x": 851,
																						"y": 1256,
																						"h": 209,
																						"w": 209
																					}
																				]
																			}
																		},
																		"sizes": {
																			"large": {
																				"h": 2048,
																				"w": 1197,
																				"resize": "fit"
																			},
																			"medium": {
																				"h": 1200,
																				"w": 701,
																				"resize": "fit"
																			},
																			"small": {
																				"h": 680,
																				"w": 397,
																				"resize": "fit"
																			},
																			"thumb": {
																				"h": 150,
																				"w": 150,
																				"resize": "crop"
																			}
																		},
																		"original_info": {
																			"height": 2382,
																			"width": 1392,
																			"focus_rects": [
																				{
																					"x": 0,
																					"y": 0,
																					"w": 1392,
																					"h": 780
																				},
																				{
																					"x": 0,
																					"y": 0,
																					"w": 1392,
																					"h": 1392
																				},
																				{
																					"x": 0,
																					"y": 0,
																					"w": 1392,
																					"h": 1587
																				},
																				{
																					"x": 0,
																					"y": 0,
																					"w": 1191,
																					"h": 2382
																				},
																				{
																					"x": 0,
																					"y": 0,
																					"w": 1392,
																					"h": 2382
																				}
																			]
																		}
																	},
																	{
																		"display_url": "pic.twitter.com/cN9Hi6RCFz",
																		"expanded_url": "https://twitter.com/runews/status/1630276764462112774/photo/1",
																		"id_str": "1630275515335450624",
																		"indices": [
																			278,
																			301
																		],
																		"media_key": "3_1630275515335450624",
																		"media_url_https": "https://pbs.twimg.com/media/Fp_m8ZGWIAANI-I.jpg",
																		"type": "photo",
																		"url": "https://t.co/cN9Hi6RCFz",
																		"ext_media_color": {
																			"palette": [
																				{
																					"percentage": 65.6,
																					"rgb": {
																						"blue": 15,
																						"green": 16,
																						"red": 14
																					}
																				},
																				{
																					"percentage": 14,
																					"rgb": {
																						"blue": 97,
																						"green": 114,
																						"red": 142
																					}
																				},
																				{
																					"percentage": 10.77,
																					"rgb": {
																						"blue": 213,
																						"green": 210,
																						"red": 206
																					}
																				},
																				{
																					"percentage": 3.08,
																					"rgb": {
																						"blue": 56,
																						"green": 38,
																						"red": 34
																					}
																				},
																				{
																					"percentage": 0.98,
																					"rgb": {
																						"blue": 215,
																						"green": 174,
																						"red": 155
																					}
																				}
																			]
																		},
																		"ext_media_availability": {
																			"status": "Available"
																		},
																		"features": {
																			"large": {
																				"faces": [
																					{
																						"x": 340,
																						"y": 412,
																						"h": 36,
																						"w": 36
																					},
																					{
																						"x": 271,
																						"y": 439,
																						"h": 50,
																						"w": 50
																					},
																					{
																						"x": 398,
																						"y": 234,
																						"h": 109,
																						"w": 109
																					}
																				]
																			},
																			"medium": {
																				"faces": [
																					{
																						"x": 340,
																						"y": 412,
																						"h": 36,
																						"w": 36
																					},
																					{
																						"x": 271,
																						"y": 439,
																						"h": 50,
																						"w": 50
																					},
																					{
																						"x": 398,
																						"y": 234,
																						"h": 109,
																						"w": 109
																					}
																				]
																			},
																			"small": {
																				"faces": [
																					{
																						"x": 225,
																						"y": 273,
																						"h": 23,
																						"w": 23
																					},
																					{
																						"x": 179,
																						"y": 291,
																						"h": 33,
																						"w": 33
																					},
																					{
																						"x": 264,
																						"y": 155,
																						"h": 72,
																						"w": 72
																					}
																				]
																			},
																			"orig": {
																				"faces": [
																					{
																						"x": 340,
																						"y": 412,
																						"h": 36,
																						"w": 36
																					},
																					{
																						"x": 271,
																						"y": 439,
																						"h": 50,
																						"w": 50
																					},
																					{
																						"x": 398,
																						"y": 234,
																						"h": 109,
																						"w": 109
																					}
																				]
																			}
																		},
																		"sizes": {
																			"large": {
																				"h": 1001,
																				"w": 1024,
																				"resize": "fit"
																			},
																			"medium": {
																				"h": 1001,
																				"w": 1024,
																				"resize": "fit"
																			},
																			"small": {
																				"h": 665,
																				"w": 680,
																				"resize": "fit"
																			},
																			"thumb": {
																				"h": 150,
																				"w": 150,
																				"resize": "crop"
																			}
																		},
																		"original_info": {
																			"height": 1001,
																			"width": 1024,
																			"focus_rects": [
																				{
																					"x": 0,
																					"y": 200,
																					"w": 1024,
																					"h": 573
																				},
																				{
																					"x": 0,
																					"y": 0,
																					"w": 1001,
																					"h": 1001
																				},
																				{
																					"x": 0,
																					"y": 0,
																					"w": 878,
																					"h": 1001
																				},
																				{
																					"x": 133,
																					"y": 0,
																					"w": 501,
																					"h": 1001
																				},
																				{
																					"x": 0,
																					"y": 0,
																					"w": 1024,
																					"h": 1001
																				}
																			]
																		}
																	},
																	{
																		"display_url": "pic.twitter.com/cN9Hi6RCFz",
																		"expanded_url": "https://twitter.com/runews/status/1630276764462112774/photo/1",
																		"id_str": "1630276130254077955",
																		"indices": [
																			278,
																			301
																		],
																		"media_key": "3_1630276130254077955",
																		"media_url_https": "https://pbs.twimg.com/media/Fp_ngL2XwAMwJwI.jpg",
																		"type": "photo",
																		"url": "https://t.co/cN9Hi6RCFz",
																		"ext_media_color": {
																			"palette": [
																				{
																					"percentage": 25.23,
																					"rgb": {
																						"blue": 37,
																						"green": 31,
																						"red": 27
																					}
																				},
																				{
																					"percentage": 12.57,
																					"rgb": {
																						"blue": 61,
																						"green": 189,
																						"red": 219
																					}
																				},
																				{
																					"percentage": 12.09,
																					"rgb": {
																						"blue": 224,
																						"green": 175,
																						"red": 77
																					}
																				},
																				{
																					"percentage": 11.05,
																					"rgb": {
																						"blue": 162,
																						"green": 160,
																						"red": 166
																					}
																				},
																				{
																					"percentage": 6.8,
																					"rgb": {
																						"blue": 82,
																						"green": 172,
																						"red": 173
																					}
																				}
																			]
																		},
																		"ext_media_availability": {
																			"status": "Available"
																		},
																		"features": {
																			"large": {
																				"faces": [
																					{
																						"x": 277,
																						"y": 100,
																						"h": 61,
																						"w": 61
																					},
																					{
																						"x": 387,
																						"y": 38,
																						"h": 69,
																						"w": 69
																					},
																					{
																						"x": 528,
																						"y": 50,
																						"h": 63,
																						"w": 63
																					}
																				]
																			},
																			"medium": {
																				"faces": [
																					{
																						"x": 277,
																						"y": 100,
																						"h": 61,
																						"w": 61
																					},
																					{
																						"x": 387,
																						"y": 38,
																						"h": 69,
																						"w": 69
																					},
																					{
																						"x": 528,
																						"y": 50,
																						"h": 63,
																						"w": 63
																					}
																				]
																			},
																			"small": {
																				"faces": [
																					{
																						"x": 266,
																						"y": 96,
																						"h": 58,
																						"w": 58
																					},
																					{
																						"x": 371,
																						"y": 36,
																						"h": 66,
																						"w": 66
																					},
																					{
																						"x": 507,
																						"y": 48,
																						"h": 60,
																						"w": 60
																					}
																				]
																			},
																			"orig": {
																				"faces": [
																					{
																						"x": 277,
																						"y": 100,
																						"h": 61,
																						"w": 61
																					},
																					{
																						"x": 387,
																						"y": 38,
																						"h": 69,
																						"w": 69
																					},
																					{
																						"x": 528,
																						"y": 50,
																						"h": 63,
																						"w": 63
																					}
																				]
																			}
																		},
																		"sizes": {
																			"large": {
																				"h": 398,
																				"w": 708,
																				"resize": "fit"
																			},
																			"medium": {
																				"h": 398,
																				"w": 708,
																				"resize": "fit"
																			},
																			"small": {
																				"h": 382,
																				"w": 680,
																				"resize": "fit"
																			},
																			"thumb": {
																				"h": 150,
																				"w": 150,
																				"resize": "crop"
																			}
																		},
																		"original_info": {
																			"height": 398,
																			"width": 708,
																			"focus_rects": [
																				{
																					"x": 0,
																					"y": 0,
																					"w": 708,
																					"h": 396
																				},
																				{
																					"x": 310,
																					"y": 0,
																					"w": 398,
																					"h": 398
																				},
																				{
																					"x": 359,
																					"y": 0,
																					"w": 349,
																					"h": 398
																				},
																				{
																					"x": 484,
																					"y": 0,
																					"w": 199,
																					"h": 398
																				},
																				{
																					"x": 0,
																					"y": 0,
																					"w": 708,
																					"h": 398
																				}
																			]
																		}
																	}
																]
															},
															"favorite_count": 232,
															"favorited": false,
															"full_text": "Disturbing new trend in Europe as Europeans kicked out of their homes to make way for refugees.\n\nIn Switzerland, locals have to leave home to honor government promises. Switzerland's excessive focus on appeasing refugees has caused to neglect duty of safeguarding own citizens. https://t.co/cN9Hi6RCFz",
															"is_quote_status": false,
															"lang": "en",
															"possibly_sensitive": false,
															"possibly_sensitive_editable": true,
															"quote_count": 7,
															"reply_count": 76,
															"retweet_count": 64,
															"retweeted": false,
															"user_id_str": "243318995",
															"id_str": "1630276764462112774"
														}
													}
												},
												"legacy": {
													"created_at": "Wed Mar 01 09:51:47 +0000 2023",
													"conversation_id_str": "1630868427882594304",
													"display_text_range": [
														0,
														280
													],
													"entities": {
														"media": [
															{
																"display_url": "pic.twitter.com/IZ24nmjwj2",
																"expanded_url": "https://twitter.com/runews/status/1630868427882594304/photo/1",
																"id_str": "1630868420924264448",
																"indices": [
																	281,
																	304
																],
																"media_url_https": "https://pbs.twimg.com/media/FqICMCiX0AA3q-W.jpg",
																"type": "photo",
																"url": "https://t.co/IZ24nmjwj2",
																"features": {
																	"large": {
																		"faces": []
																	},
																	"medium": {
																		"faces": []
																	},
																	"small": {
																		"faces": []
																	},
																	"orig": {
																		"faces": []
																	}
																},
																"sizes": {
																	"large": {
																		"h": 741,
																		"w": 1124,
																		"resize": "fit"
																	},
																	"medium": {
																		"h": 741,
																		"w": 1124,
																		"resize": "fit"
																	},
																	"small": {
																		"h": 448,
																		"w": 680,
																		"resize": "fit"
																	},
																	"thumb": {
																		"h": 150,
																		"w": 150,
																		"resize": "crop"
																	}
																},
																"original_info": {
																	"height": 741,
																	"width": 1124,
																	"focus_rects": [
																		{
																			"x": 0,
																			"y": 107,
																			"w": 1124,
																			"h": 629
																		},
																		{
																			"x": 0,
																			"y": 0,
																			"w": 741,
																			"h": 741
																		},
																		{
																			"x": 0,
																			"y": 0,
																			"w": 650,
																			"h": 741
																		},
																		{
																			"x": 67,
																			"y": 0,
																			"w": 371,
																			"h": 741
																		},
																		{
																			"x": 0,
																			"y": 0,
																			"w": 1124,
																			"h": 741
																		}
																	]
																}
															}
														],
														"user_mentions": [],
														"urls": [],
														"hashtags": [],
														"symbols": []
													},
													"extended_entities": {
														"media": [
															{
																"display_url": "pic.twitter.com/IZ24nmjwj2",
																"expanded_url": "https://twitter.com/runews/status/1630868427882594304/photo/1",
																"id_str": "1630868420924264448",
																"indices": [
																	281,
																	304
																],
																"media_key": "3_1630868420924264448",
																"media_url_https": "https://pbs.twimg.com/media/FqICMCiX0AA3q-W.jpg",
																"type": "photo",
																"url": "https://t.co/IZ24nmjwj2",
																"ext_media_color": {
																	"palette": [
																		{
																			"percentage": 86.94,
																			"rgb": {
																				"blue": 248,
																				"green": 239,
																				"red": 230
																			}
																		},
																		{
																			"percentage": 11.57,
																			"rgb": {
																				"blue": 141,
																				"green": 84,
																				"red": 49
																			}
																		},
																		{
																			"percentage": 1.49,
																			"rgb": {
																				"blue": 184,
																				"green": 148,
																				"red": 128
																			}
																		}
																	]
																},
																"ext_media_availability": {
																	"status": "Available"
																},
																"features": {
																	"large": {
																		"faces": []
																	},
																	"medium": {
																		"faces": []
																	},
																	"small": {
																		"faces": []
																	},
																	"orig": {
																		"faces": []
																	}
																},
																"sizes": {
																	"large": {
																		"h": 741,
																		"w": 1124,
																		"resize": "fit"
																	},
																	"medium": {
																		"h": 741,
																		"w": 1124,
																		"resize": "fit"
																	},
																	"small": {
																		"h": 448,
																		"w": 680,
																		"resize": "fit"
																	},
																	"thumb": {
																		"h": 150,
																		"w": 150,
																		"resize": "crop"
																	}
																},
																"original_info": {
																	"height": 741,
																	"width": 1124,
																	"focus_rects": [
																		{
																			"x": 0,
																			"y": 107,
																			"w": 1124,
																			"h": 629
																		},
																		{
																			"x": 0,
																			"y": 0,
																			"w": 741,
																			"h": 741
																		},
																		{
																			"x": 0,
																			"y": 0,
																			"w": 650,
																			"h": 741
																		},
																		{
																			"x": 67,
																			"y": 0,
																			"w": 371,
																			"h": 741
																		},
																		{
																			"x": 0,
																			"y": 0,
																			"w": 1124,
																			"h": 741
																		}
																	]
																}
															}
														]
													},
													"favorite_count": 70,
													"favorited": false,
													"full_text": "A new trend has emerged in Swiss media where there are questions being raised about the disproportionately high level of support being given to Ukrainians in Switzerland. \n\n🇨🇭While the Swiss media generally relies on copying and pasting German articles provided by agencies, when… https://t.co/IZ24nmjwj2",
													"is_quote_status": true,
													"lang": "en",
													"possibly_sensitive": false,
													"possibly_sensitive_editable": true,
													"quote_count": 1,
													"quoted_status_id_str": "1630276764462112774",
													"quoted_status_permalink": {
														"url": "https://t.co/OQeMDSaMyy",
														"expanded": "https://twitter.com/runews/status/1630276764462112774",
														"display": "twitter.com/runews/status/…"
													},
													"reply_count": 10,
													"retweet_count": 14,
													"retweeted": false,
													"user_id_str": "243318995",
													"id_str": "1630868427882594304"
												},
												"quick_promote_eligibility": {
													"eligibility": "IneligibleNotProfessional"
												}
											}
										},
										"tweetDisplayType": "Tweet",
										"hasModeratedReplies": false
									}
								}
							},
							{
								"entryId": "conversationthread-1630975004027539461",
								"sortIndex": "7592503608972181493",
								"content": {
									"entryType": "TimelineTimelineModule",
									"__typename": "TimelineTimelineModule",
									"items": [
										{
											"entryId": "conversationthread-1630975004027539461-tweet-1630975004027539461",
											"item": {
												"itemContent": {
													"itemType": "TimelineTweet",
													"__typename": "TimelineTweet",
													"tweet_results": {
														"result": {
															"__typename": "Tweet",
															"rest_id": "1630975004027539461",
															"has_birdwatch_notes": false,
															"core": {
																"user_results": {
																	"result": {
																		"__typename": "User",
																		"id": "VXNlcjoyNzQwOTgyNzY=",
																		"rest_id": "274098276",
																		"affiliates_highlighted_label": {},
																		"has_graduated_access": true,
																		"is_blue_verified": false,
																		"legacy": {
																			"blocked_by": false,
																			"blocking": false,
																			"follow_request_sent": false,
																			"followed_by": false,
																			"following": false,
																			"muting": false,
																			"notifications": false,
																			"protected": false,
																			"can_dm": false,
																			"can_media_tag": false,
																			"created_at": "Tue Mar 29 18:38:10 +0000 2011",
																			"default_profile": true,
																			"default_profile_image": false,
																			"description": "A pessimist is an optimist who knows the facts.",
																			"entities": {
																				"description": {
																					"urls": []
																				}
																			},
																			"fast_followers_count": 0,
																			"favourites_count": 1192,
																			"followers_count": 104,
																			"friends_count": 184,
																			"has_custom_timelines": true,
																			"is_translator": false,
																			"listed_count": 4,
																			"location": "Hong Kong",
																			"media_count": 87,
																			"name": "Allen",
																			"normal_followers_count": 104,
																			"pinned_tweet_ids_str": [
																				"1563142058294263809"
																			],
																			"possibly_sensitive": false,
																			"profile_banner_extensions": {
																				"mediaColor": {
																					"r": {}
																				}
																			},
																			"profile_banner_url": "https://pbs.twimg.com/profile_banners/274098276/1438853966",
																			"profile_image_extensions": {
																				"mediaColor": {
																					"r": {
																						"ok": {
																							"palette": [
																								{
																									"percentage": 33.59,
																									"rgb": {
																										"blue": 15,
																										"green": 21,
																										"red": 29
																									}
																								},
																								{
																									"percentage": 22.02,
																									"rgb": {
																										"blue": 29,
																										"green": 62,
																										"red": 107
																									}
																								},
																								{
																									"percentage": 15.45,
																									"rgb": {
																										"blue": 188,
																										"green": 176,
																										"red": 185
																									}
																								},
																								{
																									"percentage": 14.68,
																									"rgb": {
																										"blue": 119,
																										"green": 144,
																										"red": 187
																									}
																								},
																								{
																									"percentage": 4.06,
																									"rgb": {
																										"blue": 7,
																										"green": 61,
																										"red": 154
																									}
																								}
																							]
																						}
																					}
																				}
																			},
																			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1438381075743404034/rMz637kB_normal.jpg",
																			"profile_interstitial_type": "",
																			"screen_name": "TuvaorBst",
																			"statuses_count": 4900,
																			"translator_type": "none",
																			"verified": false,
																			"want_retweets": false,
																			"withheld_in_countries": []
																		},
																		"has_nft_avatar": false,
																		"super_follow_eligible": false,
																		"super_followed_by": false,
																		"super_following": false,
																		"business_account": {}
																	}
																}
															},
															"unmention_data": {},
															"edit_control": {
																"edit_tweet_ids": [
																	"1630975004027539461"
																],
																"editable_until_msecs": "1677691517000",
																"is_edit_eligible": false,
																"edits_remaining": "5"
															},
															"edit_perspective": {
																"favorited": false,
																"retweeted": false
															},
															"is_translatable": false,
															"views": {
																"count": "62",
																"state": "EnabledWithCount"
															},
															"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
															"legacy": {
																"created_at": "Wed Mar 01 16:55:17 +0000 2023",
																"conversation_id_str": "1630868427882594304",
																"display_text_range": [
																	8,
																	136
																],
																"entities": {
																	"user_mentions": [
																		{
																			"id_str": "243318995",
																			"name": "Russian Market",
																			"screen_name": "runews",
																			"indices": [
																				0,
																				7
																			]
																		}
																	],
																	"urls": [],
																	"hashtags": [],
																	"symbols": []
																},
																"favorite_count": 0,
																"favorited": false,
																"full_text": "@runews This is what happens when a ruling class feels secure in its power. They act carelessly wrt the sentiment of their constituents.",
																"in_reply_to_screen_name": "runews",
																"in_reply_to_status_id_str": "1630868427882594304",
																"in_reply_to_user_id_str": "243318995",
																"is_quote_status": false,
																"lang": "en",
																"quote_count": 0,
																"reply_count": 0,
																"retweet_count": 0,
																"retweeted": false,
																"user_id_str": "274098276",
																"id_str": "1630975004027539461"
															},
															"quick_promote_eligibility": {
																"eligibility": "IneligibleNotProfessional"
															}
														}
													},
													"tweetDisplayType": "Tweet"
												},
												"clientEventInfo": {
													"details": {
														"conversationDetails": {
															"conversationSection": "HighQuality"
														},
														"timelinesDetails": {
															"controllerData": "DAACDAAEDAABCgABFQAaiGAHgAUKAAIAAAAABEAgCAAAAAA="
														}
													}
												}
											}
										}
									],
									"displayType": "VerticalConversation",
									"clientEventInfo": {
										"details": {
											"conversationDetails": {
												"conversationSection": "HighQuality"
											}
										}
									}
								}
							},
							{
								"entryId": "conversationthread-1630956923234271235",
								"sortIndex": "7592503608972181483",
								"content": {
									"entryType": "TimelineTimelineModule",
									"__typename": "TimelineTimelineModule",
									"items": [
										{
											"entryId": "conversationthread-1630956923234271235-tweet-1630956923234271235",
											"item": {
												"itemContent": {
													"itemType": "TimelineTweet",
													"__typename": "TimelineTweet",
													"tweet_results": {
														"result": {
															"__typename": "Tweet",
															"rest_id": "1630956923234271235",
															"has_birdwatch_notes": false,
															"core": {
																"user_results": {
																	"result": {
																		"__typename": "User",
																		"id": "VXNlcjoxNDQxNzU0Mjc1OTAyNzU0ODIx",
																		"rest_id": "1441754275902754821",
																		"affiliates_highlighted_label": {},
																		"has_graduated_access": true,
																		"is_blue_verified": false,
																		"legacy": {
																			"blocked_by": false,
																			"blocking": false,
																			"follow_request_sent": false,
																			"followed_by": false,
																			"following": false,
																			"muting": false,
																			"notifications": false,
																			"protected": false,
																			"can_dm": false,
																			"can_media_tag": true,
																			"created_at": "Sat Sep 25 13:20:11 +0000 2021",
																			"default_profile": true,
																			"default_profile_image": false,
																			"description": "My Cat And I talk shit about you🐾\n\nbutterflies, fella, catsanddogs, nafo, dolphins, flying foxes, meercats, слава України, wolfs, elefants\n\n#StandWithUkraine",
																			"entities": {
																				"description": {
																					"urls": []
																				}
																			},
																			"fast_followers_count": 0,
																			"favourites_count": 48609,
																			"followers_count": 1605,
																			"friends_count": 2885,
																			"has_custom_timelines": true,
																			"is_translator": false,
																			"listed_count": 6,
																			"location": "Tsürisee",
																			"media_count": 361,
																			"name": "🌶ChrisSi🇨🇭🇺🇦🌻",
																			"normal_followers_count": 1605,
																			"pinned_tweet_ids_str": [],
																			"possibly_sensitive": false,
																			"profile_banner_extensions": {
																				"mediaColor": {
																					"r": {
																						"ok": {
																							"palette": [
																								{
																									"percentage": 94.73,
																									"rgb": {
																										"blue": 232,
																										"green": 232,
																										"red": 238
																									}
																								},
																								{
																									"percentage": 4.54,
																									"rgb": {
																										"blue": 84,
																										"green": 106,
																										"red": 134
																									}
																								},
																								{
																									"percentage": 0.4,
																									"rgb": {
																										"blue": 32,
																										"green": 39,
																										"red": 47
																									}
																								},
																								{
																									"percentage": 0.29,
																									"rgb": {
																										"blue": 116,
																										"green": 143,
																										"red": 173
																									}
																								}
																							]
																						}
																					}
																				}
																			},
																			"profile_banner_url": "https://pbs.twimg.com/profile_banners/1441754275902754821/1669568128",
																			"profile_image_extensions": {
																				"mediaColor": {
																					"r": {
																						"ok": {
																							"palette": [
																								{
																									"percentage": 79.14,
																									"rgb": {
																										"blue": 255,
																										"green": 255,
																										"red": 255
																									}
																								},
																								{
																									"percentage": 5.12,
																									"rgb": {
																										"blue": 49,
																										"green": 54,
																										"red": 54
																									}
																								},
																								{
																									"percentage": 4.19,
																									"rgb": {
																										"blue": 90,
																										"green": 127,
																										"red": 125
																									}
																								},
																								{
																									"percentage": 2.98,
																									"rgb": {
																										"blue": 29,
																										"green": 127,
																										"red": 195
																									}
																								},
																								{
																									"percentage": 0.86,
																									"rgb": {
																										"blue": 10,
																										"green": 181,
																										"red": 251
																									}
																								}
																							]
																						}
																					}
																				}
																			},
																			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1609877927746846721/46-uglIM_normal.jpg",
																			"profile_interstitial_type": "",
																			"screen_name": "chilichrissy",
																			"statuses_count": 1662,
																			"translator_type": "none",
																			"verified": false,
																			"want_retweets": false,
																			"withheld_in_countries": []
																		},
																		"has_nft_avatar": false,
																		"super_follow_eligible": false,
																		"super_followed_by": false,
																		"super_following": false,
																		"business_account": {}
																	}
																}
															},
															"card": {
																"rest_id": "https://t.co/wcSyYvDtOc",
																"legacy": {
																	"binding_values": [
																		{
																			"key": "photo_image_full_size_large",
																			"value": {
																				"image_value": {
																					"height": 419,
																					"width": 800,
																					"url": "https://pbs.twimg.com/card_img/1630956924635078660/HfQN1qnF?format=jpg&name=800x419"
																				},
																				"type": "IMAGE"
																			}
																		},
																		{
																			"key": "thumbnail_image",
																			"value": {
																				"image_value": {
																					"height": 150,
																					"width": 210,
																					"url": "https://pbs.twimg.com/card_img/1630956924635078660/HfQN1qnF?format=jpg&name=280x150"
																				},
																				"type": "IMAGE"
																			}
																		},
																		{
																			"key": "description",
																			"value": {
																				"string_value": "In Windisch AG meldet sich nun der Liegenschaftenbesitzer zu Wort. Den Mieter sei nicht wegen der Asylunterkunft gekündet worden.",
																				"type": "STRING"
																			}
																		},
																		{
																			"key": "domain",
																			"value": {
																				"string_value": "www.20min.ch",
																				"type": "STRING"
																			}
																		},
																		{
																			"key": "thumbnail_image_large",
																			"value": {
																				"image_value": {
																					"height": 300,
																					"width": 420,
																					"url": "https://pbs.twimg.com/card_img/1630956924635078660/HfQN1qnF?format=jpg&name=420x420_1"
																				},
																				"type": "IMAGE"
																			}
																		},
																		{
																			"key": "summary_photo_image_small",
																			"value": {
																				"image_value": {
																					"height": 202,
																					"width": 386,
																					"url": "https://pbs.twimg.com/card_img/1630956924635078660/HfQN1qnF?format=jpg&name=386x202"
																				},
																				"type": "IMAGE"
																			}
																		},
																		{
																			"key": "thumbnail_image_original",
																			"value": {
																				"image_value": {
																					"height": 858,
																					"width": 1200,
																					"url": "https://pbs.twimg.com/card_img/1630956924635078660/HfQN1qnF?format=jpg&name=orig"
																				},
																				"type": "IMAGE"
																			}
																		},
																		{
																			"key": "site",
																			"value": {
																				"scribe_key": "publisher_id",
																				"type": "USER",
																				"user_value": {
																					"id_str": "15786941",
																					"path": []
																				}
																			}
																		},
																		{
																			"key": "photo_image_full_size_small",
																			"value": {
																				"image_value": {
																					"height": 202,
																					"width": 386,
																					"url": "https://pbs.twimg.com/card_img/1630956924635078660/HfQN1qnF?format=jpg&name=386x202"
																				},
																				"type": "IMAGE"
																			}
																		},
																		{
																			"key": "summary_photo_image_large",
																			"value": {
																				"image_value": {
																					"height": 419,
																					"width": 800,
																					"url": "https://pbs.twimg.com/card_img/1630956924635078660/HfQN1qnF?format=jpg&name=800x419"
																				},
																				"type": "IMAGE"
																			}
																		},
																		{
																			"key": "thumbnail_image_small",
																			"value": {
																				"image_value": {
																					"height": 72,
																					"width": 100,
																					"url": "https://pbs.twimg.com/card_img/1630956924635078660/HfQN1qnF?format=jpg&name=100x100"
																				},
																				"type": "IMAGE"
																			}
																		},
																		{
																			"key": "thumbnail_image_x_large",
																			"value": {
																				"image_value": {
																					"height": 858,
																					"width": 1200,
																					"url": "https://pbs.twimg.com/card_img/1630956924635078660/HfQN1qnF?format=png&name=2048x2048_2_exp"
																				},
																				"type": "IMAGE"
																			}
																		},
																		{
																			"key": "photo_image_full_size_original",
																			"value": {
																				"image_value": {
																					"height": 858,
																					"width": 1200,
																					"url": "https://pbs.twimg.com/card_img/1630956924635078660/HfQN1qnF?format=jpg&name=orig"
																				},
																				"type": "IMAGE"
																			}
																		},
																		{
																			"key": "vanity_url",
																			"value": {
																				"scribe_key": "vanity_url",
																				"string_value": "20min.ch",
																				"type": "STRING"
																			}
																		},
																		{
																			"key": "photo_image_full_size",
																			"value": {
																				"image_value": {
																					"height": 314,
																					"width": 600,
																					"url": "https://pbs.twimg.com/card_img/1630956924635078660/HfQN1qnF?format=jpg&name=600x314"
																				},
																				"type": "IMAGE"
																			}
																		},
																		{
																			"key": "thumbnail_image_color",
																			"value": {
																				"image_color_value": {
																					"palette": [
																						{
																							"rgb": {
																								"blue": 229,
																								"green": 213,
																								"red": 201
																							},
																							"percentage": 41.44
																						},
																						{
																							"rgb": {
																								"blue": 67,
																								"green": 75,
																								"red": 79
																							},
																							"percentage": 37.19
																						},
																						{
																							"rgb": {
																								"blue": 137,
																								"green": 158,
																								"red": 169
																							},
																							"percentage": 11.53
																						},
																						{
																							"rgb": {
																								"blue": 52,
																								"green": 39,
																								"red": 32
																							},
																							"percentage": 1.39
																						},
																						{
																							"rgb": {
																								"blue": 48,
																								"green": 70,
																								"red": 56
																							},
																							"percentage": 0.17
																						}
																					]
																				},
																				"type": "IMAGE_COLOR"
																			}
																		},
																		{
																			"key": "title",
																			"value": {
																				"string_value": "Windisch AG: Liegenschaftenbesitzer nimmt Stellung",
																				"type": "STRING"
																			}
																		},
																		{
																			"key": "summary_photo_image_color",
																			"value": {
																				"image_color_value": {
																					"palette": [
																						{
																							"rgb": {
																								"blue": 229,
																								"green": 213,
																								"red": 201
																							},
																							"percentage": 41.44
																						},
																						{
																							"rgb": {
																								"blue": 67,
																								"green": 75,
																								"red": 79
																							},
																							"percentage": 37.19
																						},
																						{
																							"rgb": {
																								"blue": 137,
																								"green": 158,
																								"red": 169
																							},
																							"percentage": 11.53
																						},
																						{
																							"rgb": {
																								"blue": 52,
																								"green": 39,
																								"red": 32
																							},
																							"percentage": 1.39
																						},
																						{
																							"rgb": {
																								"blue": 48,
																								"green": 70,
																								"red": 56
																							},
																							"percentage": 0.17
																						}
																					]
																				},
																				"type": "IMAGE_COLOR"
																			}
																		},
																		{
																			"key": "summary_photo_image_x_large",
																			"value": {
																				"image_value": {
																					"height": 858,
																					"width": 1200,
																					"url": "https://pbs.twimg.com/card_img/1630956924635078660/HfQN1qnF?format=png&name=2048x2048_2_exp"
																				},
																				"type": "IMAGE"
																			}
																		},
																		{
																			"key": "summary_photo_image",
																			"value": {
																				"image_value": {
																					"height": 314,
																					"width": 600,
																					"url": "https://pbs.twimg.com/card_img/1630956924635078660/HfQN1qnF?format=jpg&name=600x314"
																				},
																				"type": "IMAGE"
																			}
																		},
																		{
																			"key": "photo_image_full_size_color",
																			"value": {
																				"image_color_value": {
																					"palette": [
																						{
																							"rgb": {
																								"blue": 229,
																								"green": 213,
																								"red": 201
																							},
																							"percentage": 41.44
																						},
																						{
																							"rgb": {
																								"blue": 67,
																								"green": 75,
																								"red": 79
																							},
																							"percentage": 37.19
																						},
																						{
																							"rgb": {
																								"blue": 137,
																								"green": 158,
																								"red": 169
																							},
																							"percentage": 11.53
																						},
																						{
																							"rgb": {
																								"blue": 52,
																								"green": 39,
																								"red": 32
																							},
																							"percentage": 1.39
																						},
																						{
																							"rgb": {
																								"blue": 48,
																								"green": 70,
																								"red": 56
																							},
																							"percentage": 0.17
																						}
																					]
																				},
																				"type": "IMAGE_COLOR"
																			}
																		},
																		{
																			"key": "photo_image_full_size_x_large",
																			"value": {
																				"image_value": {
																					"height": 858,
																					"width": 1200,
																					"url": "https://pbs.twimg.com/card_img/1630956924635078660/HfQN1qnF?format=png&name=2048x2048_2_exp"
																				},
																				"type": "IMAGE"
																			}
																		},
																		{
																			"key": "card_url",
																			"value": {
																				"scribe_key": "card_url",
																				"string_value": "https://t.co/wcSyYvDtOc",
																				"type": "STRING"
																			}
																		},
																		{
																			"key": "summary_photo_image_original",
																			"value": {
																				"image_value": {
																					"height": 858,
																					"width": 1200,
																					"url": "https://pbs.twimg.com/card_img/1630956924635078660/HfQN1qnF?format=jpg&name=orig"
																				},
																				"type": "IMAGE"
																			}
																		}
																	],
																	"card_platform": {
																		"platform": {
																			"audience": {
																				"name": "production"
																			},
																			"device": {
																				"name": "Swift",
																				"version": "12"
																			}
																		}
																	},
																	"name": "summary_large_image",
																	"url": "https://t.co/wcSyYvDtOc",
																	"user_refs_results": [
																		{
																			"result": {
																				"__typename": "User",
																				"id": "VXNlcjoxNTc4Njk0MQ==",
																				"rest_id": "15786941",
																				"affiliates_highlighted_label": {},
																				"has_graduated_access": true,
																				"is_blue_verified": false,
																				"legacy": {
																					"blocked_by": false,
																					"blocking": false,
																					"follow_request_sent": false,
																					"followed_by": false,
																					"following": false,
																					"muting": false,
																					"notifications": false,
																					"protected": false,
																					"can_dm": false,
																					"can_media_tag": true,
																					"created_at": "Sat Aug 09 06:06:47 +0000 2008",
																					"default_profile": false,
																					"default_profile_image": false,
																					"description": "Die wichtigsten News, Informationen und Kuriositäten direkt aus der 20 Minuten-Redaktion",
																					"entities": {
																						"description": {
																							"urls": []
																						},
																						"url": {
																							"urls": [
																								{
																									"display_url": "20min.ch",
																									"expanded_url": "http://www.20min.ch",
																									"url": "http://t.co/xkOdgNQwKa",
																									"indices": [
																										0,
																										22
																									]
																								}
																							]
																						}
																					},
																					"fast_followers_count": 0,
																					"favourites_count": 188,
																					"followers_count": 466537,
																					"friends_count": 395,
																					"has_custom_timelines": true,
																					"is_translator": false,
																					"listed_count": 1123,
																					"location": "Switzerland",
																					"media_count": 3821,
																					"name": "20 Minuten",
																					"normal_followers_count": 466537,
																					"pinned_tweet_ids_str": [],
																					"possibly_sensitive": false,
																					"profile_banner_extensions": {
																						"mediaColor": {
																							"r": {
																								"ok": {
																									"palette": [
																										{
																											"percentage": 46.6,
																											"rgb": {
																												"blue": 161,
																												"green": 191,
																												"red": 216
																											}
																										},
																										{
																											"percentage": 15.92,
																											"rgb": {
																												"blue": 75,
																												"green": 149,
																												"red": 204
																											}
																										},
																										{
																											"percentage": 10.45,
																											"rgb": {
																												"blue": 210,
																												"green": 203,
																												"red": 211
																											}
																										},
																										{
																											"percentage": 6.96,
																											"rgb": {
																												"blue": 131,
																												"green": 89,
																												"red": 71
																											}
																										},
																										{
																											"percentage": 6.38,
																											"rgb": {
																												"blue": 45,
																												"green": 41,
																												"red": 46
																											}
																										}
																									]
																								}
																							}
																						}
																					},
																					"profile_banner_url": "https://pbs.twimg.com/profile_banners/15786941/1413807055",
																					"profile_image_extensions": {
																						"mediaColor": {
																							"r": {
																								"ok": {
																									"palette": [
																										{
																											"percentage": 67.39,
																											"rgb": {
																												"blue": 254,
																												"green": 254,
																												"red": 254
																											}
																										},
																										{
																											"percentage": 30.23,
																											"rgb": {
																												"blue": 116,
																												"green": 45,
																												"red": 35
																											}
																										},
																										{
																											"percentage": 2.03,
																											"rgb": {
																												"blue": 165,
																												"green": 129,
																												"red": 123
																											}
																										},
																										{
																											"percentage": 0.21,
																											"rgb": {
																												"blue": 187,
																												"green": 155,
																												"red": 149
																											}
																										},
																										{
																											"percentage": 0.12,
																											"rgb": {
																												"blue": 124,
																												"green": 43,
																												"red": 35
																											}
																										}
																									]
																								}
																							}
																						}
																					},
																					"profile_image_url_https": "https://pbs.twimg.com/profile_images/1427911150814089218/GG6W_WF3_normal.jpg",
																					"profile_interstitial_type": "",
																					"screen_name": "20min",
																					"statuses_count": 76089,
																					"translator_type": "none",
																					"url": "http://t.co/xkOdgNQwKa",
																					"verified": true,
																					"verified_type": "Business",
																					"want_retweets": false,
																					"withheld_in_countries": []
																				},
																				"has_nft_avatar": false,
																				"super_follow_eligible": false,
																				"super_followed_by": false,
																				"super_following": false,
																				"business_account": {}
																			}
																		}
																	]
																}
															},
															"unmention_data": {},
															"unified_card": {
																"card_fetch_state": "NoCard"
															},
															"edit_control": {
																"edit_tweet_ids": [
																	"1630956923234271235"
																],
																"editable_until_msecs": "1677687206000",
																"is_edit_eligible": false,
																"edits_remaining": "5"
															},
															"edit_perspective": {
																"favorited": false,
																"retweeted": false
															},
															"is_translatable": true,
															"views": {
																"count": "88",
																"state": "EnabledWithCount"
															},
															"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
															"legacy": {
																"created_at": "Wed Mar 01 15:43:26 +0000 2023",
																"conversation_id_str": "1630868427882594304",
																"display_text_range": [
																	8,
																	140
																],
																"entities": {
																	"user_mentions": [
																		{
																			"id_str": "243318995",
																			"name": "Russian Market",
																			"screen_name": "runews",
																			"indices": [
																				0,
																				7
																			]
																		}
																	],
																	"urls": [
																		{
																			"display_url": "20min.ch/story/nach-kue…",
																			"expanded_url": "https://www.20min.ch/story/nach-kuendigung-besitzer-der-liegenschaften-in-windisch-ag-nimmt-stellung-226859012652",
																			"url": "https://t.co/wcSyYvDtOc",
																			"indices": [
																				117,
																				140
																			]
																		}
																	],
																	"hashtags": [],
																	"symbols": []
																},
																"favorite_count": 1,
																"favorited": false,
																"full_text": "@runews Dann kannst du auch das posten! \nNach Kündigung – Besitzer der Liegenschaften in Windisch AG nimmt Stellung.\nhttps://t.co/wcSyYvDtOc",
																"in_reply_to_screen_name": "runews",
																"in_reply_to_status_id_str": "1630868427882594304",
																"in_reply_to_user_id_str": "243318995",
																"is_quote_status": false,
																"lang": "de",
																"possibly_sensitive": false,
																"possibly_sensitive_editable": true,
																"quote_count": 0,
																"reply_count": 0,
																"retweet_count": 0,
																"retweeted": false,
																"user_id_str": "1441754275902754821",
																"id_str": "1630956923234271235"
															},
															"quick_promote_eligibility": {
																"eligibility": "IneligibleNotProfessional"
															}
														}
													},
													"tweetDisplayType": "Tweet"
												},
												"clientEventInfo": {
													"details": {
														"conversationDetails": {
															"conversationSection": "HighQuality"
														},
														"timelinesDetails": {
															"controllerData": "DAACDAAEDAABCgABFQACiKJDgAUKAAIAAAAABEBACAAAAAA="
														}
													}
												}
											}
										}
									],
									"displayType": "VerticalConversation",
									"clientEventInfo": {
										"details": {
											"conversationDetails": {
												"conversationSection": "HighQuality"
											}
										}
									}
								}
							},
							{
								"entryId": "conversationthread-1630869590891802629",
								"sortIndex": "7592503608972181473",
								"content": {
									"entryType": "TimelineTimelineModule",
									"__typename": "TimelineTimelineModule",
									"items": [
										{
											"entryId": "conversationthread-1630869590891802629-tweet-1630869590891802629",
											"item": {
												"itemContent": {
													"itemType": "TimelineTweet",
													"__typename": "TimelineTweet",
													"tweet_results": {
														"result": {
															"__typename": "Tweet",
															"rest_id": "1630869590891802629",
															"has_birdwatch_notes": false,
															"core": {
																"user_results": {
																	"result": {
																		"__typename": "User",
																		"id": "VXNlcjoxNTI2NTA4OTEyMTQ0NTM1NTUz",
																		"rest_id": "1526508912144535553",
																		"affiliates_highlighted_label": {},
																		"has_graduated_access": true,
																		"is_blue_verified": false,
																		"legacy": {
																			"blocked_by": false,
																			"blocking": false,
																			"follow_request_sent": false,
																			"followed_by": false,
																			"following": false,
																			"muting": false,
																			"notifications": false,
																			"protected": false,
																			"can_dm": false,
																			"can_media_tag": true,
																			"created_at": "Tue May 17 10:25:14 +0000 2022",
																			"default_profile": true,
																			"default_profile_image": true,
																			"description": "Keyboards aren’t quaint. Only the paranoid survive.",
																			"entities": {
																				"description": {
																					"urls": []
																				}
																			},
																			"fast_followers_count": 0,
																			"favourites_count": 1135,
																			"followers_count": 24,
																			"friends_count": 81,
																			"has_custom_timelines": true,
																			"is_translator": false,
																			"listed_count": 2,
																			"location": "",
																			"media_count": 38,
																			"name": "Mark",
																			"normal_followers_count": 24,
																			"pinned_tweet_ids_str": [],
																			"possibly_sensitive": false,
																			"profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
																			"profile_interstitial_type": "",
																			"screen_name": "Mark99490077",
																			"statuses_count": 1285,
																			"translator_type": "none",
																			"verified": false,
																			"want_retweets": false,
																			"withheld_in_countries": []
																		},
																		"has_nft_avatar": false,
																		"super_follow_eligible": false,
																		"super_followed_by": false,
																		"super_following": false,
																		"business_account": {}
																	}
																}
															},
															"unmention_data": {},
															"edit_control": {
																"edit_tweet_ids": [
																	"1630869590891802629"
																],
																"editable_until_msecs": "1677666385000",
																"is_edit_eligible": false,
																"edits_remaining": "5"
															},
															"edit_perspective": {
																"favorited": false,
																"retweeted": false
															},
															"is_translatable": false,
															"views": {
																"count": "454",
																"state": "EnabledWithCount"
															},
															"source": "<a href=\"http://twitter.com/#!/download/ipad\" rel=\"nofollow\">Twitter for iPad</a>",
															"legacy": {
																"created_at": "Wed Mar 01 09:56:25 +0000 2023",
																"conversation_id_str": "1630868427882594304",
																"display_text_range": [
																	8,
																	110
																],
																"entities": {
																	"user_mentions": [
																		{
																			"id_str": "243318995",
																			"name": "Russian Market",
																			"screen_name": "runews",
																			"indices": [
																				0,
																				7
																			]
																		}
																	],
																	"urls": [],
																	"hashtags": [],
																	"symbols": []
																},
																"favorite_count": 4,
																"favorited": false,
																"full_text": "@runews …in other news… The war in Ukraine has just ended. 44 million Ukrainians now under way to Switzerland”",
																"in_reply_to_screen_name": "runews",
																"in_reply_to_status_id_str": "1630868427882594304",
																"in_reply_to_user_id_str": "243318995",
																"is_quote_status": false,
																"lang": "en",
																"quote_count": 0,
																"reply_count": 0,
																"retweet_count": 0,
																"retweeted": false,
																"user_id_str": "1526508912144535553",
																"id_str": "1630869590891802629"
															},
															"quick_promote_eligibility": {
																"eligibility": "IneligibleNotProfessional"
															}
														}
													},
													"tweetDisplayType": "Tweet"
												},
												"clientEventInfo": {
													"details": {
														"conversationDetails": {
															"conversationSection": "HighQuality"
														},
														"timelinesDetails": {
															"controllerData": "DAACDAAEDAABCgABFQAKiSQDgAUKAAIAAAAABUBACAAAAAA="
														}
													}
												}
											}
										}
									],
									"displayType": "VerticalConversation",
									"clientEventInfo": {
										"details": {
											"conversationDetails": {
												"conversationSection": "HighQuality"
											}
										}
									}
								}
							},
							{
								"entryId": "conversationthread-1630974885185871872",
								"sortIndex": "7592503608972181463",
								"content": {
									"entryType": "TimelineTimelineModule",
									"__typename": "TimelineTimelineModule",
									"items": [
										{
											"entryId": "conversationthread-1630974885185871872-tweet-1630974885185871872",
											"item": {
												"itemContent": {
													"itemType": "TimelineTweet",
													"__typename": "TimelineTweet",
													"tweet_results": {
														"result": {
															"__typename": "Tweet",
															"rest_id": "1630974885185871872",
															"has_birdwatch_notes": false,
															"core": {
																"user_results": {
																	"result": {
																		"__typename": "User",
																		"id": "VXNlcjo5OTkzNzcyODM3MTM0NjYzNzA=",
																		"rest_id": "999377283713466370",
																		"affiliates_highlighted_label": {},
																		"has_graduated_access": true,
																		"is_blue_verified": false,
																		"legacy": {
																			"blocked_by": false,
																			"blocking": false,
																			"follow_request_sent": false,
																			"followed_by": false,
																			"following": false,
																			"muting": false,
																			"notifications": false,
																			"protected": false,
																			"can_dm": false,
																			"can_media_tag": false,
																			"created_at": "Wed May 23 19:51:26 +0000 2018",
																			"default_profile": true,
																			"default_profile_image": false,
																			"description": "I trade trending markets.\nSharing some of my ideas and strategies. Not financial advice!",
																			"entities": {
																				"description": {
																					"urls": []
																				}
																			},
																			"fast_followers_count": 0,
																			"favourites_count": 19785,
																			"followers_count": 1059,
																			"friends_count": 87,
																			"has_custom_timelines": true,
																			"is_translator": false,
																			"listed_count": 22,
																			"location": "",
																			"media_count": 750,
																			"name": "TargaryenXBT",
																			"normal_followers_count": 1059,
																			"pinned_tweet_ids_str": [
																				"1446002701549162500"
																			],
																			"possibly_sensitive": false,
																			"profile_banner_extensions": {
																				"mediaColor": {
																					"r": {
																						"ok": {
																							"palette": [
																								{
																									"percentage": 43.08,
																									"rgb": {
																										"blue": 163,
																										"green": 185,
																										"red": 209
																									}
																								},
																								{
																									"percentage": 32.87,
																									"rgb": {
																										"blue": 63,
																										"green": 76,
																										"red": 88
																									}
																								},
																								{
																									"percentage": 9.18,
																									"rgb": {
																										"blue": 79,
																										"green": 114,
																										"red": 142
																									}
																								},
																								{
																									"percentage": 3.8,
																									"rgb": {
																										"blue": 135,
																										"green": 124,
																										"red": 138
																									}
																								},
																								{
																									"percentage": 2,
																									"rgb": {
																										"blue": 140,
																										"green": 183,
																										"red": 227
																									}
																								}
																							]
																						}
																					}
																				}
																			},
																			"profile_banner_url": "https://pbs.twimg.com/profile_banners/999377283713466370/1610545283",
																			"profile_image_extensions": {
																				"mediaColor": {
																					"r": {
																						"ok": {
																							"palette": [
																								{
																									"percentage": 65.97,
																									"rgb": {
																										"blue": 24,
																										"green": 24,
																										"red": 24
																									}
																								},
																								{
																									"percentage": 17.9,
																									"rgb": {
																										"blue": 5,
																										"green": 5,
																										"red": 159
																									}
																								},
																								{
																									"percentage": 6.15,
																									"rgb": {
																										"blue": 12,
																										"green": 13,
																										"red": 68
																									}
																								},
																								{
																									"percentage": 5.15,
																									"rgb": {
																										"blue": 15,
																										"green": 11,
																										"red": 115
																									}
																								},
																								{
																									"percentage": 4.24,
																									"rgb": {
																										"blue": 2,
																										"green": 2,
																										"red": 223
																									}
																								}
																							]
																						}
																					}
																				}
																			},
																			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1452567910405267460/voYzf27e_normal.jpg",
																			"profile_interstitial_type": "",
																			"screen_name": "TargaryenXBT",
																			"statuses_count": 7126,
																			"translator_type": "none",
																			"verified": false,
																			"want_retweets": false,
																			"withheld_in_countries": []
																		},
																		"has_nft_avatar": false,
																		"super_follow_eligible": false,
																		"super_followed_by": false,
																		"super_following": false,
																		"business_account": {}
																	}
																}
															},
															"unmention_data": {},
															"edit_control": {
																"edit_tweet_ids": [
																	"1630974885185871872"
																],
																"editable_until_msecs": "1677691489000",
																"is_edit_eligible": false,
																"edits_remaining": "5"
															},
															"edit_perspective": {
																"favorited": false,
																"retweeted": false
															},
															"is_translatable": false,
															"views": {
																"count": "55",
																"state": "EnabledWithCount"
															},
															"source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
															"legacy": {
																"created_at": "Wed Mar 01 16:54:49 +0000 2023",
																"conversation_id_str": "1630868427882594304",
																"display_text_range": [
																	8,
																	180
																],
																"entities": {
																	"user_mentions": [
																		{
																			"id_str": "243318995",
																			"name": "Russian Market",
																			"screen_name": "runews",
																			"indices": [
																				0,
																				7
																			]
																		}
																	],
																	"urls": [],
																	"hashtags": [],
																	"symbols": []
																},
																"favorite_count": 0,
																"favorited": false,
																"full_text": "@runews Not from Switzerland but there was a Ukrainian guy parking his Porsche (!) on our parking, without our permission telling us he does not care if it is provate or not lmao 🤣",
																"in_reply_to_screen_name": "runews",
																"in_reply_to_status_id_str": "1630868427882594304",
																"in_reply_to_user_id_str": "243318995",
																"is_quote_status": false,
																"lang": "en",
																"quote_count": 0,
																"reply_count": 1,
																"retweet_count": 0,
																"retweeted": false,
																"user_id_str": "999377283713466370",
																"id_str": "1630974885185871872"
															},
															"quick_promote_eligibility": {
																"eligibility": "IneligibleNotProfessional"
															}
														}
													},
													"tweetDisplayType": "Tweet"
												},
												"clientEventInfo": {
													"details": {
														"conversationDetails": {
															"conversationSection": "HighQuality"
														},
														"timelinesDetails": {
															"controllerData": "DAACDAAEDAABCgABFQAKCigDgBUKAAIAAAAABEBACAAAAAA="
														}
													}
												}
											}
										}
									],
									"displayType": "VerticalConversation",
									"clientEventInfo": {
										"details": {
											"conversationDetails": {
												"conversationSection": "HighQuality"
											}
										}
									}
								}
							},
							{
								"entryId": "cursor-showmorethreads-7475214410097229176",
								"sortIndex": "7592503608972181462",
								"content": {
									"entryType": "TimelineTimelineItem",
									"__typename": "TimelineTimelineItem",
									"itemContent": {
										"itemType": "TimelineTimelineCursor",
										"__typename": "TimelineTimelineCursor",
										"value": "LgAAAPAfHBlGisDSif_HsaIthoC-1carqaItisC9gZLQgaItgICz0YnBsaItJQQRFQ4AAA",
										"cursorType": "ShowMoreThreads",
										"displayTreatment": {
											"actionText": "Show more replies"
										}
									}
								}
							}
						]
					},
					{
						"type": "TimelineTerminateTimeline",
						"direction": "Top"
					}
				]
			}
		}
	}
}