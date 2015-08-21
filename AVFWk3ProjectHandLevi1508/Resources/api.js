var newCharacter = function(){
	console.log("api New Char");
	var network = require("network");
	console.log(network.online);
	var db = require("db");
	db.dbFn();
};

exports.newCharacter = newCharacter;