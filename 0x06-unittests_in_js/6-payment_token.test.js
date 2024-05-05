const getPaymentTokenFromAPI = require('./6-payment_token.js');
const chai = require('chai');

describe('getPaymentTokenFromAPI', () => {
	it('returns expected data: value', (done) => {
		getPaymentTokenFromAPI(true)
			.then((result) => {
				chai.expect(result).to.deep.equal({data: 'Successful response from the API' });
				done();
			})
			.catch(done);
	});
});
