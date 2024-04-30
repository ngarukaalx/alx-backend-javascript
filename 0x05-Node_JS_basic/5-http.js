// Crea;;te a small HTTP server using Node's HTTP module
const { createServer } = require('http');
// function to read file and perform some required operations
// Reading a file asynchronously
function countStudents (path) {
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
                               let result = `Number of students: ${numberStudents}\n`;
                                if (cs) {
                                        result += `Number of students in CS: ${cs}. List: ${listCs}\n`;
                                }
                                if (swe) {
                                        result += `Number of students in CS: ${swe}. List: ${listSw}`;
                                }
                                resolve(result);
                        }
                })
        });
}

// declare a variable to store the intro part
let intro = 'This is the list of our students\n';

const port = 1245;
const app = createServer((req, res) => {
	if (req.url === '/') {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		res.end('Hello Holberton School!');
	}
	if (req.url === '/students') {
		// call countStudents func
		countStudents(process.argv[2])
			.then((result) => {
				// join response
				intro += result;
				res.statusCode = 200;
				res.setHeader('Content-Type', 'text/plain');
				res.end(intro);
			}).catch((error) => {
				res.statusCode = 200;
				res.setHeader('Content-Type', 'text/plain');
				res.end('Internal Server Error');
			});
	}
});
app.listen(port, () => {
	console.log(`Server running at http://0.0.0.0:${port}/`);
});
// Export the app instance
module.exports = app;
