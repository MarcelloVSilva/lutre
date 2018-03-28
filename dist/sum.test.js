"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sum_1 = require("./sum");
const chai_1 = require("chai");
describe('Sum', () => {
    it('1 + 2', () => {
        chai_1.expect(sum_1.sum(1, 2)).to.equal(3);
    });
});
//# sourceMappingURL=sum.test.js.map