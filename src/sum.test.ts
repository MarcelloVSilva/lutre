import { sum } from "./sum";
import { expect } from 'chai';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha'; 

describe('Sum', () => {
  it('1 + 2', () => {
    expect(sum(1, 2)).to.equal(3);
  });
});