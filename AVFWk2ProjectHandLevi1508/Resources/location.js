var osname = Ti.Platform.osname;
var online = Ti.Network.online;
var location = Ti.Geolocation.locationServicesEnabled;
/*
var create = function(jsonObject) {
	var db = Ti.Database.open("weatherDb");
	db.execute("CREATE TABLE IF NOT EXISTS weatherDb (id INTEGER PRIMARY KEY, jsonObject TEXT)");
	db.execute("DELETE FROM weatherDb");
	db.execute("INSERT INTO weatherDb (jsonObject) VALUES (?)", jsonObject);
	db.close();
	//var tblData = [];
};

var tblData = [];
var read = function(){
	var db = Ti.Database.open("weatherDb");
	db.execute("CREATE TABLE IF NOT EXISTS weatherDb (id INTEGER PRIMARY KEY, jsonObject TEXT)");
	var dbRows = db.execute("SELECT id, jsonObject FROM weatherDb");
	while (dbRows.isValidRow()) {
		tblData.push({
			id: dbRows.fieldByName("id"),
			jsonObject: dbRows.fieldByName("jsonObject")
		});
		Ti.API.info(tblData[0], tblData[1], tblData[2]);
		dbRows.next();
	}
	db.execute("DELETE FROM weatherDb");
	dbRows.close();
	db.close();
};
*/
Ti.API.info(JSON.parse(Ti.App.Properties.getString("weatherJSON")));

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

console.log(osname, online, location);

var latLng = function(call){
	Ti.Geolocation.getCurrentPosition(function(e) {
		if (e.success) {
			Ti.API.info("Cords latitude" + e.coords.latitude);
			Ti.API.info("Cords longitude" + e.coords.longitude);
			call(e.coords.latitude, e.coords.longitude);
		} else {
			console.log("Doesn't work");
		}
	});
};

latLng(function(latitude, longitude) {
	var lat = latitude;
	var lng = longitude;
});

//This section is loading the URL and exporting it to the app properties


//var url = "http://api.wunderground.com/api/1f29607d2437a0f5/geolookup/conditions/forecast/q/" + lat + "," + lng + ".json";
var url = "http://api.wunderground.com/api/1f29607d2437a0f5/geolookup/conditions/forecast/q/37.78583526611328,-122.40641784667969.json";
var getData = Ti.Network.createHTTPClient();
getData.onload = function(e) {
	/*var json = JSON.parse(this.responseText);
	var forecast = JSON.stringify(json.forecast);
	var location = JSON.stringify(json.location);
	var current = JSON.stringify(json.current_observation);
	create(forecast);
	create(location);
	create(current);
	Ti.API.info(location);*/
	Ti.App.Properties.setString("weatherJSON", this.responseText);
	
};
getData.open("GET", url);
getData.send();
/*
read();
/*
if(online === true && location === true) {
	Ti.Geolocation.getCurrentPosition(function(e){
		var lat = e.coords.latitude;
		var lng = e.coords.longitude;
		var url = "http://api.wunderground.com/api/1f29607d2437a0f5/geolookup/conditions/forecast/q/" + lat + "," + lng + ".json";
		var getData = Ti.Network.createHTTPClient();
		getData.onload = function(e){
			//PUSH DATA TO INTERNAL STORAGE AND UPDATE INTERNAL/EXTERNAL STORAGE
			json = JSON.parse(this.responseText);
		};
		getData.open("GET", url);
		getData.send();
		console.log(json);
	});
	} else {
		console.log("you're totally offline!!!");
};
/*

//CHANGE OUT FUNCTION TO JUST LOAD THE API INTO STORAGE.
//CREATE NEW FUNCTION TO CALL DATA FROM STORAGE AFTER LOAD.

var runGeo = function(){
	//REMOVE GEO CALLS FROM THIS FUNCTION.
	if (Ti.Network.online == true) {
	Ti.Geolocation.purpose = "Location is needed in order to get your weather.";
	Ti.Geolocation.getCurrentPosition(function(e){
		
		//PROJECT TWO insert a static latitude and longitude if the OS is android here
		
		
		var lat = e.coords.latitude;
		var lng = e.coords.longitude;
		var url = "http://api.wunderground.com/api/1f29607d2437a0f5/geolookup/conditions/forecast/q/" + lat + "," + lng + ".json";
		var getData = Ti.Network.createHTTPClient();
		getData.onload = function(e){
			//PUSH DATA TO INTERNAL STORAGE AND UPDATE INTERNAL/EXTERNAL STORAGE
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


exports.runGeoCode = runGeo;*/