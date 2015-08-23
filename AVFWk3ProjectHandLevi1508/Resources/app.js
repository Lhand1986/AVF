// Load page one with small menu
// Check for connectivity
// Load api
// Load page 2
// Update database
// Build ui
var mainWin = Ti.UI.createWindow({
	backgroundColor: "grey"
});

if(Ti.Network.online){
	var arrowDb = require("arrowDb");
	arrowDb.auth();
}
mainWin.open();
var menu = require("menu");
menu.menuFn();
