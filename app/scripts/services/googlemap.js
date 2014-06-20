'use strict';

/**
 * @ngdoc service
 * @name angularGenApp.Googlemap
 * @description
 * # Googlemap
 * Service in the angularGenApp.
 */
angular.module('angularGenApp')
	.factory('Googlemap', function ($resource) {
		return $resource(
			'http://maps.googleapis.com/maps/api/distancematrix/json',
			{
				format: 'json',
				jsoncallback: 'JSON_CALLBACK'
			},
			{ 
				'load': {
					'method': 'JSONP'
				}
			}
		);
	});
