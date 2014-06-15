'use strict';

/**
 * @ngdoc service
 * @name angularGenApp.Tweet
 * @description
 * # Tweet
 * Factory in the angularGenApp.
 */
angular.module('angularGenApp')
    .factory('Tweet', function ($resource, $http) {
        var consumerKey = encodeURIComponent('placeholder - key'),
            consumerSecret = encodeURIComponent('placeholder - secret'),
            credentials = consumerKey + ':' + consumerSecret,
            twitterOauthEndpoint = $http.post(
                'https://api.twitter.com/oauth2/token',
                'grant_type=client_credentials',
                {
                    headers: {
                        'Authorization': 'Basic ' + credentials,
                        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    }
                }
            );
        twitterOauthEndpoint.success(function (response) {
            angular.module('angularGenApp').$httpProvider.defaults.headers.common['Authorization'] = 'Bearer ' + response.access_token;
        }).error(function (response) {});

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
