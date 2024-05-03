// accepts two arguments (number) a and b
// round a and b and return the sum of it
const calculateNumber = (type, a, b) => {
  const roundA = Math.round(a);
  const roundB = Math.round(b);
  if (type === 'SUBTRACT') {
    return roundA - roundB;
  }
  if (type === 'DIVIDE') {
    if (roundB === 0) {
      return 'Error';
    }
    return roundA / roundB;
  }
  return roundA + roundB;
};
module.exports = calculateNumber;
