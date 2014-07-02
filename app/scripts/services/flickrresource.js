'use strict';

/**
 * @ngdoc service
 * @name angularGenApp.flickrResource
 * @description
 * # flickrResource
 * Factory in the angularGenApp.
 */
angular.module('angularGenApp')
  .factory('flickrResource', function ($http) {
    return {
      load: function(ob) {
        return $http({
          method: 'jsonp',
            url: 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSON_CALLBACK&tags=' + ob.tags
        }).success(function(response) {
          return response;
        }).error(function (response) {
          return response;
        });
      }
    }
  });
