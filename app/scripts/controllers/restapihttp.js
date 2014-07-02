'use strict';

/**
 * @ngdoc function
 * @name angularGenApp.controller:RestapihttpCtrl
 * @description
 * # RestapihttpCtrl
 * Controller of the angularGenApp
 */
angular.module('angularGenApp')
  .controller('RestapihttpCtrl', function ($scope, flickrResource) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.getImages = function (tags) {
      flickrResource.load({
        tags: tags
      }).success(function(data, status) {
        console.log(status);
        $scope.apiResponse = data;
      });
  	};
  });
