// Reading a file synchronously with Node JS
const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    // read file synchronously
    const data = fs.readFileSync(path, 'utf8');
    // split the data into an array of lines
    const lines = data.split('\n');
    // declare variables to store counts
    let studentsNumber = 0;
    let sweStudents = 0;
    let csStudents = 0;
    const listSwe = [];
    const listCs = [];
    let isEmpty = true;
    // loop throug the lines
    for (let i = 1; i < lines.length; i += 1) {
      if (lines[i].trim() === '') {
        isEmpty = false;
      } else {
        isEmpty = true;
      }
      if (isEmpty) {
        const values = lines[i].trim().split(',');
        studentsNumber += 1;
        if (values[3] === 'SWE') {
          sweStudents += 1;
          listSwe.push(values[0]);
        } else if (values[3] === 'CS') {
          csStudents += 1;
          listCs.push(values[0]);
        }
      }
    }
    console.log(`Number of students: ${studentsNumber}`);
    if (sweStudents) {
      console.log(`Number of students in SWE: ${sweStudents}. List: ${listSwe.join(', ')}`);
    }
    if (csStudents) {
      console.log(`Number of students in CS: ${csStudents}. List: ${listCs.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
