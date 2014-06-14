'use strict';

/**
 * @ngdoc directive
 * @name angularGenApp.directive:list
 * @description
 * # list
 */
angular.module('angularGenApp')
  .directive('list', function () {
    return {
      template: '<div></div>',
      restrict: 'E'
      // link: function postLink(scope, element, attrs) {
      //   element.text('this is the list directive');
      // }
    };
  });
