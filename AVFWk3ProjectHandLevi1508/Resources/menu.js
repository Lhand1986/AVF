var menuFn = function(){
	console.log("menuFn");
	
	var section = Ti.UI.createTableViewSection({ headerTitle: "Characters" });
	section.add(Ti.UI.createTableViewRow({title: "New Character"}));
	section.add(Ti.UI.createTableViewRow({title: "Saved Characters"}));
	
	var menuView = Ti.UI.createTableView({
		backgroundColor: "grey",
		width: "90%",
		height: "95%",
		data: [section]
	});
	mainWin.add(menuView);
	
	var network = require("network");
	menuView.addEventListener("click", function(e){
		console.log(e.index);
		
		network.networkFn(e.index);
	});
	// var network = require("network");
	// network.networkFn();
};


exports.menuFn = menuFn;