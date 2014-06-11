'use strict';

/**
 * @ngdoc function
 * @name angularGenApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the angularGenApp
 */
angular.module('angularGenApp')
  .controller('ProductsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
