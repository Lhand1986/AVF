// Load page one with small menu
// Check for connectivity
// Load api
// Load page 2
// Update database
// Build ui

var mainWin = Ti.UI.createWindow({
	backgroundColor: "#F2F2F2"
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
	url:"sanctuary.mp3",
	volume: 0.1,
	looping: true,
	allowBackground: true
	});
	player.play();
});

mainWin.open();
var menu = require("menu");
menu.menuFn();
