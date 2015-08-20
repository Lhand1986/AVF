var apiFn = function(){
	console.log("apiFn");
	
	var db = require("db");
	db.dbFn();
};

exports.apiFn = apiFn;