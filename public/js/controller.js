test = angular.module('test', []);

test.controller('testCtrl', function MainCtrl($scope) {
	$scope.home = function() {
		window.location='https://www.facebook.com/';
	}
});