'use strict';

/**
 * @ngdoc function
 * @name angularGenApp.controller:ProductdetailCtrl
 * @description
 * # ProductdetailCtrl
 * Controller of the angularGenApp
 */
angular.module('angularGenApp')
  .controller('ProductdetailCtrl', function ($scope, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.productId = $routeParams.productId;
  });
