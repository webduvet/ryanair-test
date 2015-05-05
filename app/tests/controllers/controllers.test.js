describe('Controllers', function(){
    var $scope, ctrl;

	beforeEach(module('ui.router'));
	beforeEach(module('ionic'));
    // load the controller's module
    beforeEach(module('flightapp.controllers'));

    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        ctrl = $controller('mainCtrl', {$scope: $scope});
    }));

    // tests start here
    it('should have  flights in scope', function(){
		expect($scope).toBeDefined();
        expect($scope.flights).toBeDefined(0);
        expect($scope.flights.maxprice).toEqual(0);
    });
});
