// Create a small HTTP server using Node's HTTP module
const { createServer } = require('http');
const countStudents = require('./3-read_file_async');

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
