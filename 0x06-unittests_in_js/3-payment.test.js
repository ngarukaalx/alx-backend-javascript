const chai = require('chai');
const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', () => {
	it('validata fuction Utils', () => {
		// create a spy for the Utils.calculateNumber function
		const calSpy = sinon.spy(Utils, 'calculateNumber');

		// call sendPaymentRequestToApi() function
		sendPaymentRequestToApi(100, 20);
		
		// check if calculateNumber was called with expected args
		chai.expect(calSpy.calledWith('SUM', 100, 20)).to.be.true;

		// restore original func
		calSpy.restore();
	});
});
