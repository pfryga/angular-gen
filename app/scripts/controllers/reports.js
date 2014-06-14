'use strict';

/**
 * @ngdoc function
 * @name angularGenApp.controller:ReportsCtrl
 * @description
 * # ReportsCtrl
 * Controller of the angularGenApp
 */
angular.module('angularGenApp')
  .controller('ReportsCtrl', function ($scope, $http, User) {

    $http.get('http://rest-service.guides.spring.io/greeting').
        success(function(data) {
            $scope.greeting = data;
        });

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
