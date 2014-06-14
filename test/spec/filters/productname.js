'use strict';

describe('Filter: productName', function () {

  // load the filter's module
  beforeEach(module('angularGenApp'));

  // initialize a new instance of the filter before each test
  var productName;
  beforeEach(inject(function ($filter) {
    productName = $filter('productName');
  }));

  it('should return the input prefixed with "productName filter:"', function () {
    var text = 'angularjs';
    expect(productName(text)).toBe('productName filter: ' + text);
  });

});
