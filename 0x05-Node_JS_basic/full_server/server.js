// create a small Express server
// import router
import router from './routes/index';

const express = require('express');

const app = express();

// use the router middleware
app.use('/', router);

// start the server
const port = 1245;
app.listen(port, () => {
  console.log('...');
});
export default app;
