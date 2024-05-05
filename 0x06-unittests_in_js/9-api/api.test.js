const chai = require('chai');
const request = require('request');

describe('Index page', () => {
	it('Index page', (done) => {
		request.get('http://localhost:7865', (err, res, body) => {
			if (err) return done(err);
			chai.expect(res.statusCode).to.equal(200);
			chai.expect(body).to.equal('Welcome to the payment system');
			done();
		});
	});
	it('cart page', (done) => {
		request.get('http://localhost:7865/cart/12', (err, res, body) => {
			if (err) return done(err);
			chai.expect(res.statusCode).to.equal(200);
			chai.expect(body).to.equal('Payment methods for cart 12');
			done();
		});
	});
	it('when id not a number', (done) => {
		request.get('http://localhost:7865/cart/hello', (err, res, body) => {
			if (err) return done(err);
			chai.expect(res.statusCode).to.equal(404);
			done();
		});
	});
});
