// accepts two arguments (number) a and b
// round a and b and return the sum of it
const calculateNumber = (a, b) => {
  const roundA = Math.round(a);
  const roundB = Math.round(b);
  return roundA + roundB;
};
module.exports = calculateNumber;
