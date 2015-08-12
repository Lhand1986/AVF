var osname = Ti.Platform.osname;


if(osname === "android"){
	Ti.Geolocation.Android.manualMode = true;
	Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_HIGH;
		gpsProvider = Ti.Geolocation.Android.createLocationProvider({
	    name: Ti.Geolocation.PROVIDER_GPS,
	    minUpdateTime: 60, 
	    minUpdateDistance: 100
	});
	Ti.Geolocation.Android.addLocationProvider(gpsProvider);
};



var runGeo = function(){
	if (Ti.Network.online == true) {
	Ti.Geolocation.purpose = "Location is needed in order to get your weather.";
	Ti.Geolocation.getCurrentPosition(function(e){
		var lat = e.coords.latitude;
		var lng = e.coords.longitude;
		var url = "http://api.wunderground.com/api/1f29607d2437a0f5/geolookup/conditions/forecast/q/" + lat + "," + lng + ".json";
		var getData = Ti.Network.createHTTPClient();
		getData.onload = function(e){
			var json = JSON.parse(this.responseText);
			var forecast = json.forecast;
			var location = json.location;
			var observation = json.current_observation;
			var cityHead = "Current City:";
			var currentHead = "Current Time:";
			var weatherHead = "Current Weather:";
			var windDirHead = "Wind Direction:";
			var windSpeedHead = "Wind Speed MPH:";
			var tempHead = "Current Temperature:";
			var feelsHead = "Feels Like:";
			loadInterface.buildHead(cityHead);
			loadInterface.buildUI(observation.display_location.city);
			loadInterface.buildHead(currentHead);
			loadInterface.buildUI(forecast.txt_forecast.date);
			loadInterface.buildHead(weatherHead);
			loadInterface.buildUI(observation.weather);
			loadInterface.buildHead(windDirHead);
			loadInterface.buildUI(observation.wind_dir);
			loadInterface.buildHead(windSpeedHead);
			loadInterface.buildUI(observation.wind_mph);
			loadInterface.buildHead(tempHead);
			loadInterface.buildUI(observation.temperature_string);
			loadInterface.buildHead(feelsHead);
			loadInterface.buildUI(observation.feelslike_string);
		};
		getData.open("GET", url);
		getData.send();
	});
	}else{
		alert("Network currently unavailable.");
	};
};


exports.runGeoCode = runGeo;