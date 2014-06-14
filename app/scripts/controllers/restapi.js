'use strict';

/**
 * @ngdoc function
 * @name angularGenApp.controller:RestapiCtrl
 * @description
 * # RestapiCtrl
 * Controller of the angularGenApp
 */
angular.module('angularGenApp')
  .controller('RestapiCtrl', function ($scope, item) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    item.query(function(data) {
    	$scope.apiResponse = data;
    });
    // $scope.rValue = item.someMethod(100);
  });
