'use strict';

angular.module('task')
  .controller('MainCtrl',
  ['$scope', '$cookies', 'ProductsFactory', 'ProductFactory', '$routeParams',
    function ($scope, $cookies, ProductsFactory, ProductFactory) {
      $scope.products = ProductsFactory.query({}, function (data) {
        return data;
      });

      $scope.user = ProductFactory.show({id: 1});

      $scope.currentPage = 1;
      $scope.itemsPerPage = 10;

      $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
      };

      $scope.pageChanged = function () {
        console.log('Page changed to: ' + $scope.currentPage);
      };

      $scope.products.$promise.then(function () {
        $scope.totalItems = $scope.products.length;
        console.log($scope.totalItems);

        $scope.$watch('currentPage + itemsPerPage', function () {
          var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
            end = begin + $scope.itemsPerPage;

          $scope.filteredProducts = $scope.products.slice(begin, end);
        });
      });
    }]);

