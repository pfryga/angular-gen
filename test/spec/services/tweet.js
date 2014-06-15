'use strict';

describe('Service: Tweet', function () {

  // load the service's module
  beforeEach(module('angularGenApp'));

  // instantiate service
  var Tweet;
  beforeEach(inject(function (_Tweet_) {
    Tweet = _Tweet_;
  }));

  it('should do something', function () {
    expect(!!Tweet).toBe(true);
  });

});
