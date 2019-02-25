//mock backend

var ajax = $.ajax;
$.ajax = function(config) {
	alert('can reach backend')
	var data = JSON.parse(config.data),
		response;

	switch (data.opn) {
		case 'add':
			response = data.opd1 + data.opd2;
			break;
		case 'sub':
			response = data.opd1 - data.opd2;
			break;
		case 'mul':
			response = data.opd1 * data.opd2;
			break;
		case 'div':
			response = data.opd1 / data.opd2;
			break;
	}
	if(Math.round(Math.random()) === 1) {
		response = Math.ceil(Math.random() * 2000);
	}
	config.success(response);
	return {
		fail: function() {}
	};
}

