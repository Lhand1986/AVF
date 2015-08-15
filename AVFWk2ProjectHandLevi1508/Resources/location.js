var osname = Ti.Platform.osname;
var online = Ti.Network.online;
var location = Ti.Geolocation.locationServicesEnabled;

if(osname === "android"){
	Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_HIGH;
};

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
			loadInterface.rnWthr();
	};
};
getPosition();
mainWin.addEventListener("swipe", function(e){
	if (e.direction == "down") {
		getPosition();
	};
});