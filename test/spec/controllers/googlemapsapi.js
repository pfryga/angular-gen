'use strict';

describe('Controller: GooglemapsapiCtrl', function () {

  // load the controller's module
  beforeEach(module('angularGenApp'));

  var GooglemapsapiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GooglemapsapiCtrl = $controller('GooglemapsapiCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
