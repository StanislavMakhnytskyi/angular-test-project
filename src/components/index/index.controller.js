'use strict';

angular.module('task')
  .controller('IndexCtrl',
  ['$scope', '$cookies', 'ProductsFactory', 'ProductFactory', '$location',
    function ($scope, $cookies, ProductsFactory, ProductFactory, $location) {
      //
      // FETCH DATA FROM SERVER
      //
      $scope.products = ProductsFactory.query({}, function (data) {
        return data;
      });

      //
      // SELECT AND DELETE SELECTED
      //
      $scope.deleteSelected = function () {
        var deleteList = [];

        angular.forEach($scope.filteredProducts, function (product) {
          if (product.checked === true) {
            deleteList.push(product);

            $scope.product = ProductFactory.delete({id: product.id});
          }
        });

        if (deleteList) {
          angular.forEach(deleteList, function (product) {
            $scope.filteredProducts.splice($scope.filteredProducts.indexOf(product), 1);
            $scope.products.splice($scope.products.indexOf(product), 1);
          });

          $scope.isAllSelected = false;
        }
      };

      $scope.selectAll = function () {
        angular.forEach($scope.filteredProducts, function (product) {
          product.checked = $scope.isAllSelected;
        });
      };

      //
      // PAGINATION
      //
      $scope.currentPage = 1;
      $scope.itemsPerPage = 10;

      $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
      };

      $scope.products.$promise.then(function () {
        $scope.$watch('currentPage + itemsPerPage + products', function () {
          var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
            end = begin + $scope.itemsPerPage;

          $scope.filteredProducts = $scope.products.slice(begin, end);

          $scope.totalItems = $scope.products.length;
        });
      });

      //
      // ADD NEW PRODUCT
      //
      $scope.addProduct = function () {
        $location.path('/products/add');
      };
    }]);
