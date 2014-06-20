'use strict';

/**
 * @ngdoc function
 * @name angularGenApp.controller:GooglemapsapiCtrl
 * @description
 * # GooglemapsapiCtrl
 * Controller of the angularGenApp
 */
angular.module('angularGenApp')
  .controller('GooglemapsapiCtrl', function ($scope, Googlemap) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.getMatrix = function (tags) {
  		$scope.apiResponse = Googlemap.load({
	  		origins: 'Berlin',
	  		destinations: 'Warsaw'
	  		// key: 'AIzaSyD5Qyq4lCUpmkalVhzHnAGYzkLixP5R188'
	  	});
	  	console.log($scope.apiResponse);
  	};
  });
