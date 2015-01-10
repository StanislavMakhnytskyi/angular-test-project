'use strict';

angular.module('task')
  .factory('ProductsFactory', function ($resource) {
    return $resource(
      '/api/products', {}, {
        query: {method: 'GET', isArray: true}
      })
  })

  .factory('ProductFactory', function ($resource) {
    return $resource('/api/products/:id', {}, {
      show: {method: 'GET'},
      update: {method: 'PUT', params: {id: '@id'}},
      delete: {method: 'DELETE', params: {id: '@id'}}
    })
  });
