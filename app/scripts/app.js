'use strict';

angular.module('dormsbgApp', [
  'ngResource',
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/step-one',
        controller: 'MainController'
      })
      .when('/step-two', {
        templateUrl: 'partials/step-two.html',
        controller: 'MainController'
      })
      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);
  });