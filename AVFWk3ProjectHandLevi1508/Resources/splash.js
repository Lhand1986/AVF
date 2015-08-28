var splashFn = function(){
	var splashWin = Ti.UI.createWindow({
		backgroundColor: "grey",
	});
	var splashText = Ti.UI.createLabel({
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		text: "Diablo 3 Character Data"
	});
	
	if (Ti.Platform.osname != "android"){
		splashText.color = "#C6C6C6";
	};
	
	splashWin.add(splashText);
	splashWin.open();
	
	splashWin.addEventListener("close", function(){
		var menu = require("menu");
		menu.menuFn();
	});

	setTimeout(function(){
		splashWin.close();		
	}, 2000);
};

exports.splashFn = splashFn;