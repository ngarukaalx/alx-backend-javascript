// Create a small HTTP server using Node's HTTP module
const { createServer } = require('http');

const port = 1245;
const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});
app.listen(port, () => {
  console.log(`Server running at http://0.0.0.0:${port}/`);
});
// Export the app instance
module.exports = app;
