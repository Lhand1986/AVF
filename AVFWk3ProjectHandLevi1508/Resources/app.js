// Load page one with small menu
// Check for connectivity
// Load api
// Load page 2
// Update database
// Build ui

// Program fixes
// Spread out the buttons, especially the delete button.
// Make the text larger for selections
// Incorporate a darker background with lighter text.
// Modify close button on saved data window
// Shorten sound file, remove loop.
// Add confirmation message to the delete button.

//The purpose of this application is to collect a Diablo 3 battle tag and save the user's character information so it can be accessed at a later time.

var mainWin = Ti.UI.createWindow({
	backgroundColor: "#8C001A"
});

if(Ti.Network.online){
	var arrowDb = require("arrowDb");
	arrowDb.auth();
} else {
	Ti.Network.addEventListener("change", function(){
		if(Ti.Network.online){
			var arrowDb = require("arrowDb");
			arrowDb.auth();
		};
	});
};

mainWin.addEventListener("open", function(){
	var player = Ti.Media.createSound({
	url:"identify.wav",
	volume: 0.7,
	looping: false,
	allowBackground: true
	});
	player.play();
	var splash = require("splash");
	splash.splashFn();
});

mainWin.open();

