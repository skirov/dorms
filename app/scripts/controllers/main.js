'use strict';

angular.module('dormsbgApp')
.controller('MainCtrl', function ($scope, $http, $location) {
	$scope.gotoStepTwo = function () {
		var data = stepOneForm;

		var Student = {
			firstName: data.firstName.value,
			lastName: data.lastName.value,
			dorm: data.dorm.value,
			room: data.room.value
		};
		
		$http.post('/api/stepOne', Student)
		.success(function(data) {
			console.log(data);
            $location.path('/step-two');
        }).error(function(err) {
            console.log(err);
        });
	}
});
