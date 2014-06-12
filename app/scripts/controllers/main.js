'use strict';

/**
 * @ngdoc function
 * @name angularGenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularGenApp
 */
angular.module('angularGenApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.showMobileMenu = false;
    $scope.toggleMobileMenu = function () {
    	$scope.showMobileMenu = $scope.showMobileMenu === false ? true : false;
    };
  });
