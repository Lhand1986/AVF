var Cloud = require("ti.cloud");
Cloud.debut = true;

var authenticate = function(){
	Cloud.Users.login({
		login : "admin",
		password : "1234"
	}, function(e){
		console.log(e);
		if (e.success) {
			console.log("success db");
		} else {
			alert("Error: " + e.message);
		}
	});
};
var dbFn = function(json){
	console.log("dbFn");
	authenticate();
	console.log(json);
	//var ui = require("ui");
	// ui.uiFn();
};

var save = function(array){
	console.log("db Save");
	console.log(array);
	// for (i=0, j=array.length; i<j; i++){
		// Cloud.Objects.create({
			// classname: "Diablo3Characters",
			// fields : {
				// name : array[i].name,
				// id : array[i].id,
				// level : array[i].level,
				// charClass : array[i].class,
				// seasonal : array[i].seasonal
			// }
		// });
	// };
};

exports.dbFn = dbFn;