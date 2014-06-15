'use strict';

/**
 * @ngdoc function
 * @name angularGenApp.controller:TwitterapiCtrl
 * @description
 * # TwitterapiCtrl
 * Controller of the angularGenApp
 */
angular.module('angularGenApp')
  .controller('TwitterapiCtrl', function ($scope, Tweet) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.apiResponse = Tweet.get();
  });
