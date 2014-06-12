'use strict';

/**
 * @ngdoc function
 * @name angularGenApp.controller:OrdersCtrl
 * @description
 * # OrdersCtrl
 * Controller of the angularGenApp
 */
angular.module('angularGenApp')
  .controller('OrdersCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.orders = [
    	{
			title: "Bottle",
			user: "Bill Gates",
			price: 199
		},
		{
			title: "Eggs",
			user: "Bill Gates",
			price: 79
		},
		{
			title: "Milk",
			user: "Bill Gates",
			price: 150
		},
    ];
  });
