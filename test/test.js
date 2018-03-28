var lutre = require('../js/sum');
var assert = require('assert');

describe('Sum', function() {
  it('1 + 2 = 3', function() {
    assert.equal(lutre.sum(1, 2), 3);
  });
  it('0 + 0 = 0', function() {
    assert.equal(lutre.sum(0, 0), 0);
  });
  it('2 + 3 != 6', function() {
    assert.notEqual((lutre.sum(2, 3), 6));
    
  });
});