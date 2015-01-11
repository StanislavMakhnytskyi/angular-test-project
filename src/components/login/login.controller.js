'use strict';

angular.module('task')
  .controller('LoginCtrl',
  ['$scope', '$http', '$cookies', '$route', '$location', function ($scope, $http, $cookies, $route, $location) {
    $cookies.authId = '';

    $scope.user = {};
    $scope.formInfo = {};
    //
    // NO VALIDATION BEFORE SUBMIT
    //
    $scope.submitted = false;

    console.log($scope.submitted);

    $scope.submit = function () {
      $scope.submitted = true;

      $scope.user.email = $scope.loginForm.email.$viewValue;
      $scope.user.password = $scope.loginForm.password.$viewValue;

      if ($scope.loginForm.email.$valid && $scope.loginForm.password.$valid) {
        $http({
          method: 'post',
          url: '/api/check/',
          data: angular.toJson({
            email: $scope.user.email,
            password: $scope.user.password
          })
        }).success(function (data) {
          if (data === false) {
            //
            // SHOW MESSAGE ABOUT WRONG EMAIL OR PASSWORD
            //
            $scope.wrongData = true;
          } else {
            if($scope.formInfo.remember) {
              //
              // UNLIMITED COOKIES
              //
              document.cookie = 'authId=' + data + '; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
            } else {
              //
              // SESSION COOKIES
              //
              $cookies.authId = data;
            }

            $location.path('/index');
          }
        });
      }
    }
  }]);
