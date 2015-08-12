var lblFormat = {
	color: "#000",
	borderColor: "#fff",
	font: {fontSize:23, fontFamily: "Helvetica"},
	top: 30,
	left: 30
};

var bldInt = function(e){
	var label = Ti.UI.createLabel(lblFormat);
	label.text = e;
	mainWin.add(label);
};

var bldHead = function(e){
	var label = Ti.UI.createLabel(lblFormat);
	label.text = e;
	label.font = {fontSize: 32, fontFamily: "Arial", fontWeight: "Bold"};
	mainWin.add(label);
};


exports.buildUI = bldInt;
exports.buildHead = bldHead;


setTimeout(function(){
	loadLocation.runGeoCode();
}, 600);