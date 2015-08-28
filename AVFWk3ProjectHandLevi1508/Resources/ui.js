var isAndroid = (Ti.Platform.osname=='android') ? true : false;

var savedChar = function(data){;
	var objectWin = Ti.UI.createWindow({
		backgroundColor: "#8C001A"
	});
	var savedWin = Ti.UI.createWindow({
		backgroundColor: "#8C001A"
	});
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
	savedWin.add(titleView);
	var section = Ti.UI.createTableViewSection({});
	for(i=0, j=data.length; i<j; i++){
		var row = Ti.UI.createTableViewRow({font: {fontSize: 30}, borderColor: "#bdbdbd", borderWidth: 1, color: "#C6C6C6", title: data[i].name, charId: data[i].charId, level: data[i].level, charClass: data[i].charClass, seasonal: data[i].seasonal});
		section.add(row);
	};
	var menuView = Ti.UI.createTableView({
		backgroundColor: "#8C001A",
		width: "90%",
		height: "80%",
		data: [section],
		top: 50
	});
	if (Ti.Platform.osname != "android"){
		menuView.top = 70;
	};
	var exitMain= Ti.UI.createView({
		bottom: 40,
		height: 40,
		width: "100%",
		borderColor: "black",
		backgroundColor: "#ede1d1",
		id: "Close",
		zIndex: 1
	});
	var close = Ti.UI.createLabel({
		text: "Close Window",
		color: "#000",
		backgroundColor: "#ede1d1",
		font: {fontSize: 30, fontFamily: "helvetica", fontWeight: "bold"}
	});
	
	if(isAndroid === false){
		exitMain.add(close);
		savedWin.add(exitMain);
	};
	savedWin.add(menuView);

	savedWin.open();
	
	savedWin.addEventListener("click", function(e){
		console.log(e.source.title, e.source.charId, e.source.level, e.source.id);
		if(e.source.id === "Close"){
			savedWin.close();
		} else {
			var view = Ti.UI.createView({
				left: 20,
				right: 20,
				height: "40%",
				layout: "vertical"
			});
			var exitView = Ti.UI.createView({
				right: 20,
				top: 20,
				height: 40,
				width: 40,
				borderColor: "black"
			});
			if(e.source.seasonal === true){
				var seasonal = "Yes";
			} else {
				var seasonal = "No";
			};
			var label1 = Ti.UI.createLabel({color: "#C6C6C6", text: "Character Name: " + e.source.title});
			var label2 = Ti.UI.createLabel({color: "#C6C6C6", text: "Character Id: " + e.source.charId});
			var label3 = Ti.UI.createLabel({color: "#C6C6C6", text: "Level: " + e.source.level});
			var label4 = Ti.UI.createLabel({color: "#C6C6C6", text: "Class: " +  e.source.charClass});
			var label5 = Ti.UI.createLabel({color: "#C6C6C6", text: "Seasonal: " + seasonal});
			var exit = Ti.UI.createLabel({textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER, left: 0, right: 0, top: 0, bottom: 0, text: "X", backgroundColor: "Red", font: {fontSize: 30, fontFamily: "helvetica", fontWeight: "bold"}});
			view.add(label1);
			view.add(label2);
			view.add(label3);
			view.add(label4);
			view.add(label5);
			exitView.add(exit);
			objectWin.add(view);
			objectWin.add(exitView);
			objectWin.open();
			
			exitView.addEventListener("click", function(){
				objectWin.remove(view);
				objectWin.remove(exitView);
				objectWin.close();
				
			});
		};
	});
};

exports.isAndroid = isAndroid;
exports.savedChar = savedChar;