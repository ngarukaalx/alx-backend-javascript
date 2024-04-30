// Reading a file synchronously with Node JS
module.exports = function countStudents (path) {
	const fs = require('fs');
	try {
		// read file synchronously
		const data = fs.readFileSync(path, 'utf8');
		// split the data into an array of lines
		const lines = data.split('\n');
		// declare variables to store counts
		let studentsNumber = 0;
		let sweStudents = 0;
		let csStudents = 0;
		let listSwe = [];
		let listCs = [];
		// loop throug the lines
		for (let i = 1; i < lines.length; i++) {
			if (lines[i].trim() === ''){
				continue;
			}
			const values = lines[i].trim().split(',');
			studentsNumber++;
			if (values[3] === 'SWE') {
				sweStudents++;
				listSwe.push(values[0]);
			} else if (values[3] === 'CS') {
				csStudents++;
				listCs.push(values[0]);
			}
		}
		console.log("Number of students: " + studentsNumber)
		if (sweStudents) {
			console.log(`Number of students in SWE: ${sweStudents}. List: ${listSwe}`);
		}
		if (csStudents) {
			console.log(`Number of students in CS: ${csStudents}. List: ${listCs}`);
		}
	} catch (error) {
		throw new Error('Cannot load the database');
	}
}
