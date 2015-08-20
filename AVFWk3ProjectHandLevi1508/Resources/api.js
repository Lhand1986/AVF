var apiFn = function(){
	console.log("apiFn");
	var network = require("network");
	console.log(network.online);
	var db = require("db");
	db.dbFn();
};

exports.apiFn = apiFn;