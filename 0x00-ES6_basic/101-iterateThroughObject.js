//  return every employee name in a string, separated by |
//  example John Doe | Guillaume Salva
export default function iterateThroughObject(reportWithIterator) {
  let employess = '';
  for (const [index, employee] of reportWithIterator.entries()) {
    employess += employee;
    // add a separator if it's not the last employee
    if (index < reportWithIterator.length - 1) {
      employess += ' | ';
    }
  }
  return employess;
}
