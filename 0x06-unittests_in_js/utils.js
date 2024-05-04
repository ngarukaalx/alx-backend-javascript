const Utils = {
calculateNumber: (type, a, b) => {
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
},
};
module.exports = Utils;
