angular.module("flightapp.services",[])

.provider('airports', function($injector){
	var inj = angular.injector(['ng']);
	var $http = inj.get('$http');
	//var $http = $injector.get('$http');

	var airportsP = $http.get('http://localhost:3200/api/airports');
	var _airports;

	airportsP
		.then(function(response){
			_airports = response;
		});

	this.$get = ['$q', function($q){
		return {
			promise: airportsP,
			data: _airports
		};
	}];

})

.service('flightDb', function($http){

	/*
  var
  _countries,
  _countryPromise = $http.get('http://ryanair-test.herokuapp.com/api/countries'),
  _airports;
  _airportPromise = $http.get('http://ryanair-test.herokuapp.com/api/airports');
	*/

  return {
    /**
     * selection search
     * returns the array of matching airports to entered country
     * 
     * @param {string} string the country is beginning with
     * @returns {Array} of matched airports
    findAirport:
      function(str){
        var result = [];
        _airports.forEach(function(el, i){
          if (RegExp('^'+str.toLowerCase()).test(el.seoName) ){
            result.push(el);
          }
        });
        return result;
      },
     */
    /**
     * finds all specified flights within the time and price
     * 
     * @param {string} source location airport code
     * @param {string} destination airport code
     * @param {string} earliest possible time
     * @param {string} latest possible time
     * @param {string} maximum price
     *
     * @returns {Promise} array of fights or null if nothing is found  
     */
    findFlights:
      function(src, dest, from, to, price){
        // TODO do some housekeeping for parameters
				// defaults
        var params = Array.prototype.join.call(arguments, '/'),
            apipoint = 'http://localhost:3200/api/cheap-flights/',
            url = apipoint + params,
            result;
				console.log(url);
				//return 42;
        return $http.get(url);
        /*
        return $http.get(url).success(function(data){
          result = data;
        });
        */
      }
  };
})


.service('flightQuery', function(){
	return {
		origin: "",
		dest:"",
		from: "",
		until: "",
		maxprice: 0
	}
})

;
