var osname = Ti.Platform.osname;
var online = Ti.Network.online;
var location = Ti.Geolocation.locationServicesEnabled;

//Ti.API.info(JSON.parse(Ti.App.Properties.getString("weatherJSON")));

if(osname === "android"){
	//Ti.Geolocation.Android.manualMode = true;
	Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_HIGH;
	/*	gpsProvider = Ti.Geolocation.Android.createLocationProvider({
	    name: Ti.Geolocation.PROVIDER_GPS,
	    minUpdateTime: 60, 
	    minUpdateDistance: 100
	});
	Ti.Geolocation.Android.addLocationProvider(gpsProvider);*/
};

console.log(osname, online, location);

var getPosition = function(e){
	if(online === true && location === true) {
		if(osname === "android"){
			Ti.Geolocation.purpose = "Location is needed in order to get your weather.";
		};
		Ti.Geolocation.getCurrentPosition(function(e){
			var lat = e.coords.latitude;
			var lng = e.coords.longitude;
			var url = "http://api.wunderground.com/api/1f29607d2437a0f5/geolookup/conditions/forecast/q/" + lat + "," + lng + ".json";
			var getData = Ti.Network.createHTTPClient();
			getData.onload = function(e) {
				Ti.App.Properties.setString("weatherJSON", this.responseText);
			};
			getData.open("GET", url);
			getData.send();
			loadInterface.rnWthr();
		});
		} else {
			Ti.API.info("offline");
			loadInterface.rnWthr();
	};
};

mainWin.addEventListener("swipe", function(e){
	if (e.direction == "down") {
		getPosition();
	};
});