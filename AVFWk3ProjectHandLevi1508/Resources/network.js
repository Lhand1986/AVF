var networkFn = function(e){
	if (e === 0){
		if (Ti.Network.online){
			var tag = require("tag");
			tag.newChar();
		} else {
			alert("Error, need active network connection to pull new data");
		};	
	};
	if (e === 1) {
		var data = require("data");
		data.read();
	};
	if (e === 2) {
		var data = require("data");
		data.del();
	};
};

exports.networkFn = networkFn;