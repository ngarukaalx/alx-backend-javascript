// test calculateNumber
const { calculateNumber } = require('./1-calcul.js');
const assert = require('assert');

describe('calculateNumber', function() {
	describe('type=SUM', function() {
		it('...', function() {
			assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
		});
	});
	describe('type=SUBTRUCT', function() {
		it('..', function() {
			assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
		});
	});
	describe('type=DIVIDE', function() {
		it('...', function() {
			assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
		});
		it('...', function() {
			assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
		});
	});
});
