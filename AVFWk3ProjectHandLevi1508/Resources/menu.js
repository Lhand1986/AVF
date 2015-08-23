var menuFn = function(){
	console.log("menuFn");
	
	var section = Ti.UI.createTableViewSection({ headerTitle: "Characters" });
	section.add(Ti.UI.createTableViewRow({borderColor: "#bdbdbd", borderWidth: 1, color: "#000", title: "New Battle Tag Info"}));
	section.add(Ti.UI.createTableViewRow({borderColor: "#bdbdbd", borderWidth: 1, color: "#000", title: "Saved Characters"}));
	section.add(Ti.UI.createTableViewRow({borderColor: "#bdbdbd", borderWidth: 1, color: "#000", title: "Delete saved data"}));
	
	var menuView = Ti.UI.createTableView({
		backgroundColor: "#F2F2F2",
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
};


exports.menuFn = menuFn;