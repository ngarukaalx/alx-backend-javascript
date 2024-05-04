const sinon = require('sinon');
const sendPaymentRequestToAPI = require('./4-payment.js');

describe('4-payment.js', () => {
	let consoleSpy;

	beforeEach(() => {
		consoleSpy = sinon.spy(console, 'log');
	});

	afterEach(() => {
		consoleSpy.restore()
	});
	it('with args 100, 20', () => {
		sendPaymentRequestToAPI(100, 20);
		sinon.assert.calledWith(consoleSpy, 'The total is: 120');
		sinon.assert.calledOnce(consoleSpy);
	});
	it('with args 10, 10', () => {
		sendPaymentRequestToAPI(10, 10);
		sinon.assert.calledWith(consoleSpy, 'The total is: 20');
		sinon.assert.calledOnce(consoleSpy);
	});
});
