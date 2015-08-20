// Load page one with small menu
// Check for connectivity
// Load api
// Load page 2
// Update database
// Build ui
var mainWin = Ti.UI.createWindow({
	backgroundColor: "grey"
});

mainWin.open();
var ui = require("ui");
var menu = require("menu");
menu.menuFn();
