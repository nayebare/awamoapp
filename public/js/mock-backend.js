//receives a stringyfied json data object

function mockServerComputation(data) {
	var response;
	switch (data.opn) {
		case 'add':
		response = parseInt(data.opd1) + parseInt(data.opd2);
			break;
		case 'sub':
		response = parseInt(data.opd1) - parseInt(data.opd2);
			break;
		case 'mul':
			response = parseInt(data.opd1) * parseInt(data.opd2);
			break;
		case 'div':
		response = parseInt(data.opd1) / parseInt(data.opd2);
			break;

	}

	if (Math.round(Math.random()) === 1) {
	response = Math.ceil(Math.random() * 2000);
	}

	return response;

/*
	return {
		fail: function () { }
	};
*/
}

