var isAndroid = (Ti.Platform.osname=='android') ? true : false;

// var newChar = function(){
	// console.log("UI New Char");
	// if (isAndroid){
		// var textField = Ti.UI.createTextField({
			// hintText : "Enter Battle Tag in name-#### format (ie. Noob-1234)"
		// });
		// var battleDialog = Ti.UI.createAlertDialog({
			// title: "Enter battle tag",
			// androidView: textField
		// });
		// battleDialog.addEventListener("click", function(e){
			// console.log(textField.value);
		// });
		// battleDialog.show();
	// } else {
		// var dialog = Ti.UI.createAlertDialog({
			// title: "Enter Battle Tag as \nname-####",
			// style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT
		// });
		// var dialog = Ti.UI.createAlertDialog({
			// title: "Enter Battle Tag as \nname-####",
			// style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT
		// });
		// dialog.addEventListener("click", function(e){
			// console.log("e.text " + e.text);
		// });
		// dialog.show();
	// };
// };

var savedChar = function(){
	console.log("UI Saved Char");
};

exports.isAndroid = isAndroid;
exports.savedChar = savedChar;
