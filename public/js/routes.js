var test = angular.module('test', ['ngRoute']).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.
     		when('/', {template:'../views/index.html'}).
     		otherwise({redirectTo:'/'});
	}]);