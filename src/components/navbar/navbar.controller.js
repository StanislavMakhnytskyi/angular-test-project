'use strict';

angular.module('task')
  .controller('NavbarCtrl', ['$scope', '$cookies', 'UserFactory',
    function ($scope, $cookies, UserFactory) {

      console.log($cookies);
      $scope.user = UserFactory.get({id: $cookies.authId}, function (data) {
        $scope.product = data;
      });
    }
  ]);
