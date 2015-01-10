'use strict';

angular.module('task')
  .controller('LoginCtrl',
  ['$scope', '$http', '$cookies', '$route', '$location', function ($scope, $http, $cookies, $route, $location) {
    $cookies.isAuth = 'false';
    $cookies.authMail = '';

    $scope.formInfo = {};
    // no validation before submit
    $scope.submited = false;

    $scope.submit = function () {
      $scope.submited = true;

      $scope.email = $scope.loginForm.email.$viewValue;
      $scope.password = $scope.loginForm.password.$viewValue;

      if ($scope.loginForm.email.$valid && $scope.loginForm.password.$valid) {
        $http({
          method: 'post',
          url: '/api/check/',
          data: angular.toJson({
            email: $scope.email,
            password: $scope.password
          })
        }).success(function (data, status, headers, cfg) {
          if (data === false) {
            // show message about wrong email or password
            $scope.wrongData = true;
          } else {
            $cookies.isAuth = 'true';
            $cookies.authMail = $scope.email;

            $location.path('/index');
          }
        });
      }
    };
  }]);
