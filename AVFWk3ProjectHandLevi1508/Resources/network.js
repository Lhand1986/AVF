// var osname = Ti.Platform.osname;
// var online = Ti.Network.online;
var isAndroid = (Ti.Platform.osname=='android') ? true : false;
var isOnline = Ti.Network.online;


var networkFn = function(e){
	console.log("networkFn");
	console.log(e);
	console.log("Is Android" + isAndroid);
	console.log("Is Online" + isOnline);
	/*
	// var osname = Ti.Platform.osname;
	// var online = Ti.Network.online;
	console.log(online);
	console.log(osname);
	if(osname === "android"){
		Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_HIGH;
	};
	
	if (online === true){
		console.log("Online");
		// if (e === 0){
			// console.log("E = 0");
		// } 
		// if (e === 1){
			// console.log("E = 1");
		// }
		var api = require("api");
		api.apiFn();
	}
	
	
	// var api = require("api");
	// api.apiFn();*/
};

exports.networkFn = networkFn;
// exports.online = online;