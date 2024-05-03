// reads the database asynchronously
const fs = require('fs');

module.exports = function readDatabase(path) {
  // returns a promise
  return new Promise((resolve, reject) => {
    // read file async...
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.split('\n');
        const arrayObjects = {};
        const sweList = [];
        const csList = [];
        // loop through lines
        for (let i = 1; i < lines.length; i += 1) {
          // logic to skip emtylines
          let emptyLine = false;
          const line = lines[i].trim();
          if (line === '') {
            emptyLine = true;
          }
          // skip process if line is empty
          if (!emptyLine) {
            const values = line.split(',');
            if (values[3] === 'SWE') {
              sweList.push(values[0]);
            }
            if (values[3] === 'CS') {
              csList.push(values[0]);
            }
          }
        }
        arrayObjects.SWE = sweList;
        arrayObjects.CS = csList;
        resolve(arrayObjects);
      }
    });
  });
};
