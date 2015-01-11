'use strict';

angular.module('task').filter('price', function () {
  var filtered = '';

  return function (item) {
    if (isNaN(parseFloat(item))) {
      filtered = '';
    } else {
      filtered = parseFloat(item).toFixed(2);
    }

    return filtered;
  };
});
