
var read = function(){
	var tblData = [];
	var db = Ti.Database.open("diablo3Db");
	db.execute("CREATE TABLE IF NOT EXISTS d3TBL (id INTEGER PRIMARY KEY, name TEXT, charId TEXT, level TEXT, charClass TEXT, seasonal TEXT)");
	var dbRows = db.execute("SELECT * FROM d3TBL");
	while (dbRows.isValidRow()) {

		tblData.push({
			name: dbRows.fieldByName("name"),
			charId: dbRows.fieldByName("charId"),
			level: dbRows.fieldByName("level"),
			charClass: dbRows.fieldByName("charClass"),
			seasonal: dbRows.fieldByName("seasonal")
		});
		dbRows.next();
	}
	dbRows.close();
	db.close();
	var ui = require("ui");
	ui.savedChar(tblData);
};

var save = function(array){
	
	var db = Ti.Database.open("diablo3Db");
	db.execute("CREATE TABLE IF NOT EXISTS d3TBL (id INTEGER PRIMARY KEY, name TEXT, charId TEXT, level TEXT, charClass TEXT, seasonal TEXT)");
	for(i=0, j=array.length; i<j; i++){
		db.execute("INSERT INTO d3TBL (charClass, charId, level, name, seasonal) VALUES (?,?,?,?,?)", array[i].charClass, array[i].charId, array[i].level, array[i].name, array[i].seasonal);
	}
	db.close();
};

var del = function(){
	var db = Ti.Database.open("diablo3Db");
	db.execute("CREATE TABLE IF NOT EXISTS d3TBL (id INTEGER PRIMARY KEY, name TEXT, charId TEXT, level TEXT, charClass TEXT, seasonal TEXT)");
	var dbRows = db.execute("SELECT * FROM d3TBL");
	while (dbRows.isValidRow()) {
		db.execute("DELETE FROM d3TBL WHERE id=?", dbRows.fieldByName("id"));	
		dbRows.next();
	};
	db.close();
};

exports.del = del;
exports.save = save;
exports.read = read;