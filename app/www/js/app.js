// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('flightapp', [
		'ionic',
		'flightapp.controllers',
		'flightapp.services'
	])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider, $httpProvider){

	$stateProvider
	.state('main',{
		url: '/main',
		templateUrl: 'templates/main.tpl.html',
		controller: 'mainCtrl as ctrl',
		resolve: {
			airports: ["airports", function(airports){
				return airports.promise;
			}]
		}
	})
	.state('airport',{
		url: '/airport',
		templateUrl: 'templates/airport.tpl.html',
		controller: 'airportCtrl as ctrl',
	})
	.state('time',{
		url:'/time',
		templateUrl: 'templates/time.tpl.html',
		controller: 'timeCtrl as ctrl'
	})
	.state('price',{
		url:'/price',
		templateUrl: 'templates/price.tpl.html',
		controller: 'priceCtrl as ctrl'
	})
	.state('result',{
		url:'/result',
		templateUrl:'templates/result.tpl.html',
		controller: 'resultCtrl as ctrl'
	})

	;

	$urlRouterProvider.otherwise('main');

})
