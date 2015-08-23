var isAndroid = (Ti.Platform.osname=='android') ? true : false;

var savedChar = function(){
	console.log("UI Saved Char");
};

var buildUi = function(){
	console.log("Build UI");
};

exports.isAndroid = isAndroid;
exports.savedChar = savedChar;
exports.buildUi = buildUi;