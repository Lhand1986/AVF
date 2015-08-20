var networkFn = function(){
	console.log("networkFn");
	
	var api = require("api");
	api.apiFn();
};

exports.networkFn = networkFn;