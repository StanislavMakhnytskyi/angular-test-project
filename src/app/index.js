'use strict';

var task = angular.module('task', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ngResource', 'ngRoute'])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/components/login/login.html',
        controller: 'LoginCtrl'
      })
      .when('/index', {
        templateUrl: '/components/index/index.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        templateUrl: '/components/notFound/notFound.html',
        controller: 'NotFoundCtrl'
      });

    $locationProvider.html5Mode(true);
  }]);
