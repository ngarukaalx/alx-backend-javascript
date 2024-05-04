const chai = require('chai');
const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./4-payment.js');

describe('sendPaymentRequestToApi', () => {
	it('validata fuction Utils', () => {
		// Stub the function Utils.calculateNumber
		// to always return the same number 10
		const stub = sinon.stub(Utils, 'calculateNumber').returns(10);

		// create a spy for the console.log()
		const conSpy = sinon.spy(console, 'log');

		// call sendPaymentRequestToApi() function
		sendPaymentRequestToApi(100, 20);
		
		// check if stub was called with expected args
		chai.expect(stub.calledWith('SUM', 100, 20)).to.be.true;

		// verify that the console.log is logging the required output
		sinon.assert.calledWith(conSpy, 'The total is: 10');

		// restore console.log() original func
		conSpy.restore();
		
		// restore the original func
		stub.restore();
	});
});
