//LOAD UI ELEMENTS FROM INTERNAL STORAGE PRIOR TO LOADING FUNCTION
//Ti.API.info(JSON.parse(Ti.App.Properties.getString("weatherJSON")));

//ERROR CHECKING
/*if (typeof Ti.App.Properties.getString("weatherJSON") === "undefined") {
	Ti.API.info("Error Here");
} else {
	Ti.API.info("It exists");
};
*/
var runWeather = function(e){
	if (typeof Ti.App.Properties.getString("weatherJSON") != "undefined") {
		var json = JSON.parse(Ti.App.Properties.getString("weatherJSON"));
		var forecast = json.forecast;
		var location = json.location;
		var observation = json.current_observation;
		locationCity.text = location.city;
		locationZip.text = location.zip;
		elevation.text = observation.display_location.elevation;
		weather.text = observation.weather;
		humidity.text = observation.relative_humidity;
		windDir.text = observation.wind_dir;
		windMph.text = observation.wind_mph;
		windKph.text = observation.wind_kph;
		crtTmp.text = observation.temperature_string;
		flsLk.text = observation.feelslike_string;
		frCst1.text = forecast.txt_forecast.forecastday[0].title;
		frCst1Txt.text = forecast.txt_forecast.forecastday[0].fcttext;
		frCst2.text = forecast.txt_forecast.forecastday[1].title;
		frCst2Txt.text = forecast.txt_forecast.forecastday[1].fcttext;
		time.text = observation.local_time_rfc822;
	} else {
		alert("No weather data exists in Application cache. Please try again.");
	}
};

var lblFormat = {
	color: "#000",
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
frCst2.top = frCst1Txt.top + ftSz + 30;
frCst2.text = "Forecast 2 Title";

var frCst2Txt = Ti.UI.createLabel(lblFormat);
frCst2Txt.top = frCst2.top + ftSz + 15;
frCst2Txt.text = "Forecast 2 Text";

var time = Ti.UI.createLabel(lblFormat);
time.bottom = 20;
time.text = "Last Time Accessed Was Fri, 00 JAN 0000 00:00:00 -0000";


//Need to be individual for Android setup
mainWin.add(locationCity);
mainWin.add(locationZip);
mainWin.add(elevation);
mainWin.add(weather);
mainWin.add(humidity);
mainWin.add(windDir);
mainWin.add(windMph);
mainWin.add(windKph);
mainWin.add(crtTmp);
mainWin.add(flsLk);
mainWin.add(frCst1);
mainWin.add(frCst1Txt);
mainWin.add(frCst2);
mainWin.add(frCst2Txt);
mainWin.add(time);
exports.rnWthr = runWeather;