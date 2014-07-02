'use strict';

describe('Service: flickrResource', function () {

  // load the service's module
  beforeEach(module('angularGenApp'));

  // instantiate service
  var flickrResource;
  beforeEach(inject(function (_flickrResource_) {
    flickrResource = _flickrResource_;
  }));

  it('should do something', function () {
    expect(!!flickrResource).toBe(true);
  });

});
