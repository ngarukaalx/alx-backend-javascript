// Crea;;te a small HTTP server using Node's HTTP module
const fs = require('fs');
const { createServer } = require('http');
// function to read file and perform some required operations
// Reading a file asynchronously
function countStudents(path) {
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
        let isEmpty = true;
        const listCs = [];
        const listSw = [];
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
        let result = `Number of students: ${numberStudents}\n`;
        if (cs) {
          result += `Number of students in CS: ${cs}. List: ${listCs.join(', ')}\n`;
        }
        if (swe) {
          result += `Number of students in SWE: ${swe}. List: ${listSw.join(', ')}`;
        }
        resolve(result);
      }
    });
  });
}

const port = 1245;
const app = createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');
    // call countStudents func
    countStudents(process.argv[2])
      .then((result) => {
        res.end(result);
      }).catch((error) => {
        res.end(error);
      });
  }
});
app.listen(port, () => {
  console.log(`Server running at http://0.0.0.0:${port}/`);
});
// Export the app instance
module.exports = app;
