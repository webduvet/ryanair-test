angular.module('flightapp.controllers', [
		'flightapp.services'
		])


.controller('mainCtrl', function($scope, $state, flightQuery, airports, $ionicModal){
	
	$scope.flights = {
		origin: null,
		dest: null,
		dateFrom: null,
		dateTo: null,
		maxprice: 0
	};
	$scope.form = {
		origin: "select Origin",
		dest: "select Destination",
		dateFrom: null,
		dateTo: null,
		maxprice: 0
	};

	$scope.airports = airports.data;
	$scope.data = {
		searchQuery: ""
	};

	$ionicModal.fromTemplateUrl('templates/modal.airports.tpl.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalAirports = modal;
  });

	this.selectOrigin = function(item){
		$scope.smer = 'origin';
		console.log($scope.direction);
		$scope.modalAirports.show();
	};

	this.selectDestination = function(item){
		$scope.smer = 'dest';
		$scope.modalAirports.show();
	};

	$scope.search = function(){
		$scope.airports = "";
		if($scope.data.searchQuery.length === 0 ){
			$scope.airports = airports.data;
			return;
		}
		var filtered = airports.data.filter(function(el){
			var str = $scope.data.searchQuery.toLowerCase(),
				test = el.name.toLowerCase();
			var match = RegExp('^'+str).test(test);
			return match;
		});
		$scope.airports = filtered ? filtered : [];
		//console.log($scope.airports);
	}

	this.setFlightParam = function (param, item){
		$scope.flights[param] = item;
		$scope.modalAirports.hide();
		$scope.airports = airports.data;
		$scope.data.searchQuery = '';
		console.log($scope.flights, param);
		$scope.form[param] = item.name + ', ' + item.iataCode;
		flightQuery[param] = item.iataCode;
	};

	this.showResults = function(){
		flightQuery.from = $scope.form.dateFrom.toISOString().substr(0,10);
		flightQuery.until = $scope.form.dateTo.toISOString().substr(0,10);
		flightQuery.maxprice = $scope.form.maxprice;
		$state.go('result');
	};

})


.controller('resultCtrl', function($scope, $state, flightQuery, flightDb){

	console.log('final query', flightQuery);

	var flights = flightDb.findFlights(flightQuery.origin, flightQuery.dest, flightQuery.from, flightQuery.until, flightQuery.maxprice);

	$scope.flightList = null;

	flights.success(function(data){
		console.log('flight service',data);
		if(data.count > 0) {
			$scope.flightList = data.flights;
			$scope.cur = data.currencySymbol;
		}
	});


})


;
