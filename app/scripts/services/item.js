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
    return $resource('https://api.github.com/repos/angular/angular.js/issues');
  });
