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
});
