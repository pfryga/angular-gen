'use strict';

/**
 * @ngdoc filter
 * @name angularGenApp.filter:productName
 * @function
 * @description
 * # productName
 * Filter in the angularGenApp.
 */
angular.module('angularGenApp')
  .filter('productName', function () {
    return function (input) {
      return 'Selected product ID: ' + input;
    };
  });
