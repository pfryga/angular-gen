'use strict';

/**
 * @ngdoc service
 * @name angularGenApp.Tweet
 * @description
 * # Tweet
 * Factory in the angularGenApp.
 */
angular.module('angularGenApp')
    .factory('Tweet', function ($resource) {
        return $resource(
            'https://api.twitter.com/1.1/search/tweets.json',
            {
                q: 'angularjs'
            },
            { 
                get: {
                    method: 'JSONP'
                }
            }
        );
    });
