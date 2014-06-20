'use strict';

/**
 * @ngdoc overview
 * @name angularGenApp
 * @description
 * # angularGenApp
 *
 * Main module of the application.
 */
angular
  .module('angularGenApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/reports', {
        templateUrl: 'views/reports.html',
        controller: 'ReportsCtrl'
      })
      .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'ProductsCtrl'
      })
      .when('/products/:productId', {
        templateUrl: 'views/productdetail.html',
        controller: 'ProductdetailCtrl'
      })
      .when('/orders', {
        templateUrl: 'views/orders.html',
        controller: 'OrdersCtrl'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl'
      })
      .when('/restapi', {
        templateUrl: 'views/restapi.html',
        controller: 'RestapiCtrl'
      })
      .when('/twitterapi', {
        templateUrl: 'views/twitterapi.html',
        controller: 'TwitterapiCtrl'
      })
      .when('/googleMapsApi', {
        templateUrl: 'views/googlemapsapi.html',
        controller: 'GooglemapsapiCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
