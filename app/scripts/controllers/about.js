'use strict';

/**
 * @ngdoc function
 * @name angularGenApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularGenApp
 */
angular.module('angularGenApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
