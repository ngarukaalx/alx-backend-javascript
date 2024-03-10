export default function createIteratorObject(report) {
  const employessObject = report.allEmployees;
  // Create an array to store all employees
  const allEmployees = [];

  // iterate through departments
  for (const department in employessObject) {
    // get employees for the current department
    if (Object.prototype.hasOwnProperty.call(employessObject, department)) {
      const departmentEmployess = employessObject[department];
      // Add the employess to the allEployess array
      allEmployees.push(...departmentEmployess);
    }
  }
  return allEmployees;
}
