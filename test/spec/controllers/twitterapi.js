'use strict';

describe('Controller: TwitterapiCtrl', function () {

  // load the controller's module
  beforeEach(module('angularGenApp'));

  var TwitterapiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TwitterapiCtrl = $controller('TwitterapiCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
