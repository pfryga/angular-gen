'use strict';

/**
 * @ngdoc function
 * @name angularGenApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the angularGenApp
 */
angular.module('angularGenApp')
  .controller('UsersCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get('resources/users.json').success(function(data) {
		$scope.users = data;
	});
  });
