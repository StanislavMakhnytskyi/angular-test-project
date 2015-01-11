'use strict';

angular.module('task')
  .controller('EditUserCtrl',
  ['$scope', '$cookies', 'UserFactory', '$location', '$timeout', '$routeParams',
    function ($scope, $cookies, UserFactory, $location, $timeout, $routeParams) {
      UserFactory.get({id: $cookies.authId}, function (data) {
        $scope.user = data;
      });

      $scope.phoneNumberPattern = (function () {
        var regexp = /^(\d{10})$/;
        return {
          test: function (value) {
            if ($scope.requireTel === false) {
              return true;
            }
            return regexp.test(value);
          }
        };
      })();

      //
      // NO VALIDATION BEFORE SUBMIT
      //
      $scope.submitted = false;
      $scope.successfullyAdded = false;

      $scope.submit = function () {
        $scope.submitted = true;

        if ($scope.editUserForm.$valid) {
          UserFactory.update($scope.user, function () {
            $scope.successfullyEdited = true;

            $timeout(function () {
              $location.path('/index');
            }, 3000);
          });
        }
      };

      $scope.backToIndex = function () {
        $location.path('/index');
      }
    }]);
