// var apiFn = function(){
	// console.log("api New Char");
	// // var network = require("network");
	// // console.log(network.online);
// 	
// 	
	// var db = require("db");
	// db.dbFn();
// };
var battleTag;
var newChar = function(){
	console.log("UI New Char");
	if (ui.isAndroid){
		var textField = Ti.UI.createTextField({
			hintText : "Enter Battle Tag in name-#### format (ie. Noob-1234)"
		});
		var battleDialog = Ti.UI.createAlertDialog({
			title: "Enter battle tag",
			androidView: textField,
			buttonNames:["Okay"]
		});
		battleDialog.addEventListener("click", function(e){
			console.log(textField.value);
			battleTag = textField.value;
			var api = require("api");
			api.getApi(battleTag);
			
		});
		battleDialog.show();
	} else {
		var dialog = Ti.UI.createAlertDialog({
			title: "Enter Battle Tag as \nname-####",
			style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT
		});
		var bDialog = Ti.UI.createAlertDialog({
			title: "Flerp",
			style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT
		});
		dialog.addEventListener("click", function(e){
			console.log("e.text " + e.text);
			battleTag = e.text;
			var api = require("api");
			api.getApi(battleTag);
		});
		dialog.show();
	};
};

exports.newChar = newChar;