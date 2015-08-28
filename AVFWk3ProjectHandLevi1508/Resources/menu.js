var menuFn = function(){
	console.log("menuFn");
	
var titleView = Ti.UI.createView({
	height: 40,
	top: 0,
	backgroundColor: "#626262"
});

var titleLabel = Ti.UI.createLabel({
	color: "#C6C6C6",
	text: "Diablo 3 Character Menu",
	font: {fontSize: 25},
	left: 20
});

if (Ti.Platform.osname != "android"){
	titleView.top = 20;
};

titleView.add(titleLabel);
mainWin.add(titleView);
	var section = Ti.UI.createTableViewSection({});
	section.add(Ti.UI.createTableViewRow({borderColor: "#bdbdbd", font: {fontSize: 30, fontWeight: "bold"}, borderWidth: 1, color: "#C6C6C6", title: "New Battle Tag Info"}));
	section.add(Ti.UI.createTableViewRow({title: ""}));
	section.add(Ti.UI.createTableViewRow({borderColor: "#bdbdbd", font: {fontSize: 30, fontWeight: "bold"}, borderWidth: 1, color: "#C6C6C6", title: "Saved Characters"}));
	section.add(Ti.UI.createTableViewRow({title: ""}));
	section.add(Ti.UI.createTableViewRow({borderColor: "#bdbdbd", font: {fontSize: 30, fontWeight: "bold"}, borderWidth: 1, color: "#C6C6C6", title: "Delete saved data"}));
	

	
	var menuView = Ti.UI.createTableView({
		backgroundColor: "#8C001A",
		width: "90%",
		height: "80%",
		top: 50,
		data: [section]
	});
	if (Ti.Platform.osname != "android"){
		menuView.top = 70;
	};
	mainWin.add(menuView);
	
	var network = require("network");
	menuView.addEventListener("click", function(e){
		console.log(e.index);
		
		network.networkFn(e.index);
	});
};


exports.menuFn = menuFn;