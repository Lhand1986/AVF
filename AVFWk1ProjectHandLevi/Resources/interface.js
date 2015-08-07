var lblFormat = {
	color: "#000",
	backgroundColor: "#bbc3cc",
	borderColor: "#fff",
	font: {fontSize:23, fontFamily: "Helvetica"},
	top: 30,
	left: 30
};

var bldInt = function(e){
	var label = Ti.UI.createLabel(lblFormat);
	label.text = e;
	label.right = 30;
	mainWin.add(label);
};

var bldHead = function(e){
	var label = Ti.UI.createLabel(lblFormat);
	label.text = e;
	label.left = 30;
	label.font = {fontSize: 23, fontFamily: "Arial", fontWeight: "Bold"};
	mainWin.add(label);
};
exports.buildUI = bldInt;
exports.buildHead = bldHead;
setTimeout(function(){
	loadLocation.runGeoCode();
}, 600);