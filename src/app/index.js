'use strict';

angular.module('task',
  ['ngAnimate', 'ngCookies', 'ngSanitize', 'ngResource', 'ngRoute', 'ui.bootstrap'])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/components/login/login.html',
        controller: 'LoginCtrl'
      })
      .when('/index', {
        templateUrl: '/components/index/index.html',
        controller: 'IndexCtrl'
      })
      .when('/products/add', {
        templateUrl: '/components/products/addProduct.html',
        controller: 'AddProductCtrl'
      })
      .otherwise({
        templateUrl: '/components/notFound/notFound.html',
        controller: 'NotFoundCtrl'
      });

    $locationProvider.html5Mode(true);
  }]);
