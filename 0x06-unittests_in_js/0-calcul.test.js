// import the calculateNumber
const assert = require('assert');
const  calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
    describe('sum with both not rounded', () => {
        it('returns expected 4', () => {
            assert.equal(calculateNumber(10, 3), 13);
	});
    });
    describe('sum with second rounded', () => {
        it('returns expected 5', () => {
            assert.equal(calculateNumber(1, 3.7), 5);
	});
    });
    describe('sum with first rounded', () => {
        it('returns expected', () => {
            assert.equal(calculateNumber(3.7, 1), 5);
	});
    });
    describe('sum with both rounded', () => {
        it('returns expected 6', () => {
            assert.equal(calculateNumber(1.5, 3.7), 6);
	});
    });
});
