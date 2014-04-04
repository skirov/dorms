'use strict';

var dormsApp = angular.module('dormsbgApp');

dormsApp.controller('MainCtrl', function ($scope, $http, $location) {
	$scope.gotoStepTwo = function (studentViewModel, valid) {
		console.log(valid);
		var data = stepOneForm;

		$http.post('/api/stepOne', studentViewModel)
		.success(function(data) {
            $location.path('/step-two');
        }).error(function(err) {
            console.log(err);
        });
	}

	$scope.finishRequest = function (studentInfo) {
	}
});
