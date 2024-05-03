// test calculateNumber
const assert = require('assert');
const { calculateNumber } = require('./1-calcul.js');

describe('calculateNumber', () => {
  describe('sUM with no round', () => {
    it('should return 5', () => {
      assert.equal(calculateNumber('SUM', 1, 4), 5);
    });
  });
  describe('sum with first round', () => {
    it('should return 2', () => {
      assert.equal(calculateNumber('SUM', 1.1, 1), 2);
    });
  });
  describe('sum with second round', () => {
    it('should return 3', () => {
      assert.equal(calculateNumber('SUM', 2, 1.1), 3);
    });
  });
  describe('sum with both round', () => {
    it('should return 5', () => {
      assert.equal(calculateNumber('SUM', 2.1, 3.1), 5);
    });
  });
  describe('sUBTRUCT both rounded', () => {
    it('should return -4', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });
  describe('subtract first round', () => {
    it('should return 1', () => {
      assert.equal(calculateNumber('SUBTRACT', 5.4, 4), 1);
    });
  });
  describe('subtract second round', () => {
    it('should return -2', () => {
      assert.equal(calculateNumber('SUBTRACT', 2, 4.2), -2);
    });
  });
  describe('subtruct no rounds', () => {
    it('shoud return 10', () => {
      assert.equal(calculateNumber('SUBTRACT', 15, 5), 10);
    });
  });
  describe('dIVIDE both round', () => {
    it('should return 0.2', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
  });
  describe('divide first round', () => {
    it('should return 2', () => {
      assert.equal(calculateNumber('DIVIDE', 4.2, 2), 2);
    });
  });
  describe('divide second round', () => {
    it('should return 4', () => {
      assert.equal(calculateNumber('DIVIDE', 8, 2.1), 4);
    });
  });
  describe('dived error', () => {
    it('return error', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});
