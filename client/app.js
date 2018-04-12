var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function($routeProvider){
	
	$routeProvider
		.when('/',{
			templateUrl: 'templates/list.html',
			controller: 'peoController'
		})
		.when('/details',{
			templateUrl: 'templates/list.html',
			 controller: 'peoController'
		})
		.when('/details/create',{
			templateUrl: 'templates/add.html',
			 controller: 'peoController'
		})
		.when('/details/:id/edit',{
			templateUrl: 'templates/edit.html',
			 controller: 'peoController'
		})
		.when('/details/:id/show',{
			templateUrl: 'templates/show.html',
			 controller: 'peoController'
		});
	
	
	
});