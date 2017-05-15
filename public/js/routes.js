var test = angular.module('test', ['ngRoute']).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			// when('/about', {template:'partials/about.html'}).
			// when('/experiments', {template:'partials/experiments.html'}).
			otherwise({redirectTo:'/', template:'../views/index.html'});
	}]);