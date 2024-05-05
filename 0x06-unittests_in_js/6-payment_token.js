// When success is true, it should return a resolved
// promise with the object {data: 'Successful response from the API' }
// Otherwise, the function is doing nothing.
function getPaymentTokenFromAPI(success) {
	if(success) {
		return new Promise((resolve) => {
			resolve({data: 'Successful response from the API' });
		});
	} else {
		return Promise.resolve();
	}
};
module.exports = getPaymentTokenFromAPI;
