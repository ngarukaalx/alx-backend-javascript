// Reading a file asynchronously
module.exports = function countStudents (path) {
	const fs = require('fs');
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
				let listCs = [];
				let listSw = [];
				const lines = data.split('\n');
				for (let i = 1; i < lines.length; i++) {
					// skip empty lines
					if (lines[i].trim() === '') {
						continue;
					}
					const values = lines[i].trim().split(',');
					numberStudents++;
					if (values[3] === 'SWE') {
						listSw.push(values[0]);
						swe++;
					}
					if (values[3] === 'CS') {
						listCs.push(values[0]);
						cs++;
					}
				}
				console.log('Number of students: ' + numberStudents);
				if (cs) {
					console.log(`Number of students in CS: ${cs}. List: ${listCs}`);
				}
				if (swe) {
					console.log(`Number of students in CS: ${swe}. List: ${listSw}`);
				}
				resolve();
			}
		})
	});
}
