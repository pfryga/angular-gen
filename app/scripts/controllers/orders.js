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
			title: 'Bottle',
			user: 'John Snow',
			price: 199,
			date: 1402741036
		},
		{
			title: 'Eggs',
			user: 'Bill Gates',
			price: 79,
			date: 1402827436
		},
		{
			title: 'Milk',
			user: 'Jaime Lanister',
			price: 150,
			date: 1402744636
		},
		{
			title: 'Sugar',
			user: 'Jaime Lanister',
			price: 15,
			date: 1403345836
		},
		{
			title: 'Coffee',
			user: 'Jaime Lanister',
			price: 160,
			date: 1434277036
		}
    ];
    $scope.orderProp = 'date';
  });
