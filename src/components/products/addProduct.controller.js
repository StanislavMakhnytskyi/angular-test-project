'use strict';

angular.module('task')
  .controller('AddProductCtrl', ['$scope', '$cookies', 'ProductsFactory', '$location', '$timeout',
    function ($scope, $cookies, ProductsFactory, $location, $timeout) {
      $scope.formInfo = {};

      //
      // NO VALIDATION BEFORE SUBMIT
      //
      $scope.submitted = false;
      $scope.successfullyAdded = false;

      $scope.submit = function () {
        $scope.submitted = true;

        $scope.product = {
          name: $scope.addProductForm.productName.$viewValue,
          price: $scope.addProductForm.productPrice.$viewValue,
          description: $scope.addProductForm.productDescription.$viewValue
        };

        if ($scope.addProductForm.$valid) {
          ProductsFactory.add($scope.product, function () {
            $scope.successfullyAdded = true;

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
