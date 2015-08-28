var networkFn = function(e){
	if (e === 0){
		if (Ti.Network.online){
			var tag = require("tag");
			tag.newChar();
		} else {
			alert("Error, need active network connection to pull new data");
		};	
	};
	if (e === 2) {
		var data = require("data");
		data.read();
	};
	if (e === 4) {
			var deleteAlert = Ti.UI.createAlertDialog({
				title: "This will delete all saved data\n Are you sure?",
				buttonNames:["Confirm", "Cancel"]
		});
		deleteAlert.show();
		deleteAlert.addEventListener("click", function(e){
			if(e.index === 0){
				var data = require("data");
				data.del();
			}
		});
	};
};

exports.networkFn = networkFn;