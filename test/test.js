var lutre = require('../js/sum');
var assert = require('assert');

describe('Sum equal', function() {
  it('1 + 2 = 3', function() {
    assert.equal(lutre.sum(1, 2), 3);
  });
  it('0 + 0 = 0', function() {
    assert.equal(lutre.sum(0, 0), 0);
  });
  it('-1 + 1 = 0', function() {
    assert.equal(lutre.sum(-1, 1), 0);
  });
  it('-1 + (-1) = -2', function() {
    assert.equal(lutre.sum(-1, -1), -2);
  });
  it('-1 + (-1) = -2', function() {
    assert.equal(lutre.sum(-1, -1), -2);
  });
});

describe('Sum not equal', function() {
  it('2 + 3 != 6', function() {
    assert.notEqual((lutre.sum(2, 3), 6));
  });
  it('2 + tres = 5', function() {
    assert.notEqual((lutre.sum(2, 'tres'), 5));
  });

})