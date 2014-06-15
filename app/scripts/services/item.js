'use strict';

/**
 * @ngdoc service
 * @name angularGenApp.item
 * @description
 * # item
 * Factory in the angularGenApp.
 */
angular.module('angularGenApp')
	.factory('item', function ($resource) {
		return $resource(
			'http://api.flickr.com/services/feeds/photos_public.gne',
			{
				format: 'json',
				jsoncallback: 'JSON_CALLBACK'
			},
			{ 
				'load': {
					'method': 'JSONP'
				}
			});
		});
