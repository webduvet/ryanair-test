describe('Controllers', function(){
    var scope;

    // load the controller's module
    beforeEach(module('flightapp.controllers'));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
		console.log(scope);
        $controller('mainCtrl', {$scope: scope});
    }));

    // tests start here
    it('should have  flights in scope', function(){
        expect(scope.flights.maxprice).toEqual(0);
    });
});
