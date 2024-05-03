// accepts two arguments (number) a and b
module.exports = {
  // accepts two arguments (number) a and b
  // round a and b and return the sum of it
  calculateNumber(a, b) {
    const roundA = Math.round(a);
    const roundB = Math.round(b);
    return roundA + roundB;
  },
};
