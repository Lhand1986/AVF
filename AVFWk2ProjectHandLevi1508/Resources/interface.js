//LOAD UI ELEMENTS FROM INTERNAL STORAGE PRIOR TO LOADING FUNCTION

var lblFormat = {
	color: "#000",
	borderColor: "#fff",
	font: {fontSize:16, fontFamily: "Helvetica"},
	left: 20
};

var ftSz = lblFormat.font.fontSize;

var locationCity = Ti.UI.createLabel(lblFormat);
locationCity.font = {fontSize: 32, fontFamily: "Helvetica"};
locationCity.top = 40;
locationCity.text = "Location City";

var locationZip = Ti.UI.createLabel(lblFormat);
locationZip.top = locationCity.top + locationCity.font.fontSize + 15;
locationZip.text = "Zip 00000";

var elevation = Ti.UI.createLabel(lblFormat);
elevation.top = locationZip.top;
elevation.left = "40%";
elevation.text = "Elevation";

var weather = Ti.UI.createLabel(lblFormat);
weather.top = locationZip.top + ftSz + 15;
weather.text = "Weather";

var humidity = Ti.UI.createLabel(lblFormat);
humidity.top = weather.top;
humidity.left = "40%";
humidity.text = "Humidity";

var windDir = Ti.UI.createLabel(lblFormat);
windDir.top = humidity.top + ftSz + 15;
windDir.text = "Wind Direction: E";

var windMph = Ti.UI.createLabel(lblFormat);
windMph.top = windDir.top;
windMph.left = "40%";
windMph.text = "88MPH";

var windKph = Ti.UI.createLabel(lblFormat);
windKph.top = windMph.top;
windKph.left = "60%";
windKph.text = "88KPH";

var crtTmp = Ti.UI.createLabel(lblFormat);
crtTmp.top = windKph.top + ftSz + 15;
crtTmp.text = "Current Temperature";

var flsLk = Ti.UI.createLabel(lblFormat);
flsLk.top = crtTmp.top + ftSz + 15;
crtTmp.text = "Feels Like";

var frCst1 = Ti.UI.createLabel(lblFormat);
frCst1.top = flsLk.top + ftSz + 15;
frCst1.text = "Forecast 1 Title";

var frCst1Txt = Ti.UI.createLabel(lblFormat);
frCst1Txt.top = frCst1.top + ftSz + 15;
frCst1Txt.text = "Forecast 1 Text";

var frCst2 = Ti.UI.createLabel(lblFormat);
frCst2.top = frCst1.top;
frCst2.left = "40%";
frCst2.text = "Forecast 2 Title";

var frCst2Txt = Ti.UI.createLabel(lblFormat);
frCst2Txt.top = frCst1Txt.top;
frCst2Txt.left = frCst2.left;
frCst2Txt.text = "Forecast 2 Text";

var time = Ti.UI.createLabel(lblFormat);
time.bottom = 20;
time.text = "Last Time Accessed Was Fri, 14 Aug 2015 20:18:58 -0700";

/*
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

//CHECK FOR INTERNET BEFORE LOADING THE FUNCTION. If there is no internet, load the previous dataset.
setTimeout(function(){
	loadLocation.runGeoCode();
}, 600);*/

mainWin.add(locationCity, locationZip, elevation, weather, humidity, windDir, windMph, windKph, crtTmp, flsLk, frCst1, frCst1Txt, frCst2, frCst2Txt, time);
