'use strict';

/**
 * @ngdoc service
 * @name angularGenApp.User
 * @description
 * # User
 * Service in the angularGenApp.
 */
angular.module('angularGenApp')
  .service('User', function User() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var _username = '',
        _exampleField = 5;

    this.setUsername = function (username) {
    	_username = username;
    };
    this.sayHello = function () {
    	return 'Hello ' + _username;
    };
    this.setExampleField = function (content) {
        _exampleField = content;
    };
    this.getExampleField = function () {
        return _exampleField;
    };
    
  });
