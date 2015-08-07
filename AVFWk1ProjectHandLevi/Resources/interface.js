var lblFormat = {
	color: "#000",
	backgroundColor: "#bbc3cc",
	borderColor: "#fff",
	top: 30,
	left: 30
};
var scrollView = Ti.UI.createScrollView({
  showVerticalScrollIndicator: true,
  height: '80%',
  width: '80%'
});
var view = Ti.UI.createView({
  backgroundColor:'#336699',
  borderRadius: 10,
  top: 10
});
var bldInt = function(e){
	var label = Ti.UI.createLabel(lblFormat);
	label.text = e;
	scrollView.add(label);
};

var bldHead = function(e){
	var label = Ti.UI.createLabel(lblFormat);
	label.text = e;
	label.font = {fontSize:34, fontFamily: "Helvetica"};
	scrollView.add(label);
};
//scrollView.add(view);
mainWin.add(scrollView);
exports.buildUI = bldInt;
exports.buildHead = bldHead;
//loadLocation.runGeoCode();
Ti.Geolocation.addEventListener("location", function(){
	loadLocation.runGeoCode();
});