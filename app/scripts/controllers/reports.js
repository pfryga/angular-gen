'use strict';

/**
 * @ngdoc function
 * @name angularGenApp.controller:ReportsCtrl
 * @description
 * # ReportsCtrl
 * Controller of the angularGenApp
 */
angular.module('angularGenApp')
  .controller('ReportsCtrl', function ($scope, User) {

  	User.setUsername('piotr.fryga');
  	User.setExampleField(2);

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.getHelloMessage = function () {
    	return User.sayHello();
    };
    $scope.displayExampleField = function () {
    	return User.getExampleField();
    };

  });
