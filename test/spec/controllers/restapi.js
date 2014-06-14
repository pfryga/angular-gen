'use strict';

describe('Controller: RestapiCtrl', function () {

  // load the controller's module
  beforeEach(module('angularGenApp'));

  var RestapiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RestapiCtrl = $controller('RestapiCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
