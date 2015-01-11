'use strict';

angular.module('task')
  .controller('NavbarCtrl', ['$scope', '$cookies', 'UserFactory',
    function ($scope, $cookies, UserFactory) {
      UserFactory.get({id: $cookies.authId}, function (data) {
        $scope.user = data;
      });
    }
  ]);
