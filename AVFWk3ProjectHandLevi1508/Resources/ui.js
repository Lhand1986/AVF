var isAndroid = (Ti.Platform.osname=='android') ? true : false;

var savedChar = function(data){;
	var objectWin = Ti.UI.createWindow({
		backgroundColor: "#F2F2F2"
	});
	var savedWin = Ti.UI.createWindow({
		backgroundColor: "#F2F2F2"
	});
	var section = Ti.UI.createTableViewSection({ headerTitle: "Characters" });
	for(i=0, j=data.length; i<j; i++){
		var row = Ti.UI.createTableViewRow({borderColor: "#bdbdbd", borderWidth: 1, color: "#000", title: data[i].name, charId: data[i].charId, level: data[i].level, charClass: data[i].charClass, seasonal: data[i].seasonal});
		section.add(row);
	};
	var menuView = Ti.UI.createTableView({
		backgroundColor: "#F2F2F2",
		width: "90%",
		height: "95%",
		data: [section]
	});
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
				height: 30,
				width: 30,
				borderColor: "black"
			});
			if(e.source.seasonal === true){
				var seasonal = "Yes";
			} else {
				var seasonal = "No";
			};
			var label1 = Ti.UI.createLabel({color: "#000", text: "Character Name: " + e.source.title});
			var label2 = Ti.UI.createLabel({color: "#000", text: "Character Id: " + e.source.charId});
			var label3 = Ti.UI.createLabel({color: "#000", text: "Level: " + e.source.level});
			var label4 = Ti.UI.createLabel({color: "#000", text: "Class: " +  e.source.charClass});
			var label5 = Ti.UI.createLabel({color: "#000", text: "Seasonal: " + seasonal});
			var exit = Ti.UI.createLabel({text: "X", backgroundColor: "Red", font: {fontSize: 30, fontFamily: "helvetica", fontWeight: "bold"}});
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