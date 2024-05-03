// Readinga a file asynchronously
const fs = require('fs');

module.exports = function countStudents(path) {
  // return a promise
  return new Promise((resolve, reject) => {
    // Read the file asynchronously
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        // declare variables to store counts and list students
        let numberStudents = 0;
        let swe = 0;
        let cs = 0;
        const listCs = [];
        const listSw = [];
        let isEmpty = true;
        const lines = data.split('\n');
        for (let i = 1; i < lines.length; i += 1) {
          // skip empty lines
          if (lines[i].trim() === '') {
            isEmpty = false;
          } else {
            isEmpty = true;
          }
          if (isEmpty) {
            const values = lines[i].trim().split(',');
            numberStudents += 1;
            if (values[3] === 'SWE') {
              listSw.push(values[0]);
              swe += 1;
            }
            if (values[3] === 'CS') {
              listCs.push(values[0]);
              cs += 1;
            }
          }
        }
        console.log(`Number of students: ${numberStudents}`);
        if (cs) {
          console.log(`Number of students in CS: ${cs}. List: ${listCs.join(', ')}`);
        }
        if (swe) {
          console.log(`Number of students in SWE: ${swe}. List: ${listSw.join(', ')}`);
        }
        resolve();
      }
    });
  });
};
