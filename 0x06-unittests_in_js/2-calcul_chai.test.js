// test calculateNumber
const chai = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', () => {
  describe('sUM with no round', () => {
    it('should return 5', () => {
      chai.expect(calculateNumber('SUM', 1, 4)).to.equal(5);
    });
  });
  describe('sum with first round', () => {
    it('should return 2', () => {
      chai.expect(calculateNumber('SUM', 1.1, 1)).to.equal(2);
    });
  });
  describe('sum with second round', () => {
    it('should return 3', () => {
      chai.expect(calculateNumber('SUM', 2, 1.1)).to.equal(3);
    });
  });
  describe('sum with both round', () => {
    it('should return 5', () => {
      chai.expect(calculateNumber('SUM', 2.1, 3.1)).to.equal(5);
    });
  });
  describe('sUBTRUCT both rounded', () => {
    it('should return -4', () => {
      chai.expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });
  describe('subtract first round', () => {
    it('should return 1', () => {
      chai.expect(calculateNumber('SUBTRACT', 5.4, 4)).to.equal(1);
    });
  });
  describe('subtract second round', () => {
    it('should return -2', () => {
      chai.expect(calculateNumber('SUBTRACT', 2, 4.2)).to.equal(-2);
    });
  });
  describe('subtruct no rounds', () => {
    it('shoud return 10', () => {
      chai.expect(calculateNumber('SUBTRACT', 15, 5)).to.equal(10);
    });
  });
  describe('dIVIDE both round', () => {
    it('should return 0.2', () => {
      chai.expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
  });
  describe('divide first round', () => {
    it('should return 2', () => {
      chai.expect(calculateNumber('DIVIDE', 4.2, 2)).to.equal(2);
    });
  });
  describe('divide second round', () => {
    it('should return 4', () => {
      chai.expect(calculateNumber('DIVIDE', 8, 2.1)).to.equal(4);
    });
  });
  describe('dived error', () => {
    it('return error', () => {
      chai.expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
});
