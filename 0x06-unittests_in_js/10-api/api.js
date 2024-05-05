const express = require('express');

// create an instance of express called app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

const port = 7865;

app.get('/', (req, res) => {
	res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
	const id = req.params.id;
	if (/^\d+$/.test(id)) {
		res.send(`Payment methods for cart ${id}`);
	} else {
		res.status(404).end();
	}
});

app.get('/available_payments', (req, res) => {
	res.send({
		  payment_methods: {
			  credit_cards: true,
			  paypal: false
		  }
	}
	);
});

app.post('/login', (req, res) => {
	const { userName } = req.body;
	if (userName) {
		res.send(`Welcome ${userName}`);
	}
});

app.listen(port, () => {
	console.log(`API available on localhost port ${port}`);
});
module.exports = app;
