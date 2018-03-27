var lutre = require('../js/sum');
var assert = require('assert');

describe('Sum', function() {
  it('should return 3 when send 1 and 2 to func', function() {
    assert.equal(lutre.sum(1, 2), 3);
  });
});