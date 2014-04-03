'use strict';

angular.module('dormsbgApp', [
  'ngResource',
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/step-one',
        controller: 'MainCtrl'
      })
      .when('/step-two', {
        templateUrl: 'partials/step-two.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);
  });