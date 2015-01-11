'use strict';

angular.module('task')
  //
  // FETCH DATA FROM SERVER
  //
  .factory('ProductsFactory', function ($resource) {
    return $resource(
      '/api/products', {}, {
        query: {method: 'GET', isArray: true},
        add: {method: 'POST', isArray: true}
      })
  })

  .factory('ProductFactory', function ($resource) {
    return $resource('/api/products/:id', {}, {
      show: {method: 'GET'},
      update: {method: 'PUT', params: {id: '@id'}},
      delete: {method: 'DELETE', params: {id: '@id'}, isArray: true}
    })
  })

  .factory('UserFactory', function ($resource) {
    return $resource('/api/users/:id', {}, {
      show: {method: 'GET'},
      update: {method: 'PUT', params: {id: '@id'}}
    })
  })

  //
  // SEND PRODUCT MODELS BETWEEN CONTROLLERS
  //
  .factory('ProductModelFactory', function () {
    return {
      product: {
        'id': '',
        'name': '',
        'price': '',
        'description': ''
      }
    };
  });
