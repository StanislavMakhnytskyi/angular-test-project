'use strict';

angular.module('task')
  .controller('NotFoundCtrl', function ($scope) {
    $scope.notFoundMessage = 'Sorry, the page you are looking for isn\'t here.';
  });
