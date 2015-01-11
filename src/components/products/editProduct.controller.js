'use strict';

angular.module('task')
  .controller('EditProductCtrl',
  ['$scope', '$cookies', 'ProductFactory', '$location', '$timeout', '$routeParams',
    'ProductModelFactory',
    function ($scope, $cookies, ProductFactory, $location, $timeout, $routeParams, ProductModelFactory) {
      $scope.formInfo = {};

      if (ProductModelFactory.product.id !== $routeParams.id) {
        $scope.product = ProductFactory.get({id: $routeParams.id}, function (data) {
          ProductModelFactory.product = data;

          ProductModelFactory.product.price = parseFloat(ProductModelFactory.product.price);
          $scope.product = ProductModelFactory.product;
        });
      }

      ProductModelFactory.product.price = parseFloat(ProductModelFactory.product.price);
      $scope.product = ProductModelFactory.product;

      //
      // NO VALIDATION BEFORE SUBMIT
      //
      $scope.submitted = false;
      $scope.successfullyEdited = false;

      $scope.submit = function () {
        $scope.submitted = true;

        if ($scope.editProductForm.$valid) {
          ProductFactory.update($scope.product, function () {
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
