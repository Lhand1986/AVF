var Cloud = require("ti.cloud");
Cloud.debug = true;

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
};

var save = function(array){
	console.log("db Save");
	for (i=0, j=array.length; i<j; i++){
		Cloud.Objects.create({
			classname: "Diablo3Characters",
			fields : {
				name : array[i].name,
				charId : array[i].id,
				level : array[i].level,
				charClass : array[i].class,
				seasonal : array[i].seasonal
			}
	}, function(e) {
			if (e.success) {
				console.log("Cloud saved!");
			} else {
				alert("Data not saved!");
			}
		});
	};
};

exports.auth = authenticate;
exports.save = save;
exports.dbFn = dbFn;