'use strict';

var dormsApp = angular.module('dormsbgApp');

dormsApp
.controller('MainController', ['$scope', '$http', '$location', 'ui', function ($scope, $http, $location, ui) {
	$scope.gotoStepTwo = function (studentViewModel, valid) {
		if (valid) {
			var data = stepOneForm;

			$http.post('/api/stepOne', studentViewModel)
			.success(function(data) {
				ui.fillFinishedStep(1);
	            $location.path('/step-two');
	        }).error(function(err) {
	            console.log(err);
	        });
	    }
	};

	$scope.finishRequest = function (studentInfo) {
	};
}])
.factory('ui', function() {
	return {
		fillFinishedStep : function(stepNumber) {
			//Add flowing liquid and remove active class from circles
			var circles = $(".circle");
			$('.circle.active').append("<div class='yellowLiquid'></div>");
			$(circles[stepNumber - 1]).removeClass(".active");

			//Add active class to the next step
			$(circles[stepNumber]).addClass(".active");
		}
	};
});;
