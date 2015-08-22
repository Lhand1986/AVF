var key = "5nrdpc5px2auztjame7xu3adbsrz5u3g";

var getApi = function(battleTag){
	var url = "https://us.api.battle.net/d3/profile/" + battleTag + "/?locale=en_US&apikey=" + key;
	console.log(url);
	var getData = Ti.Network.createHTTPClient({
		onload : function() {
			var json = JSON.parse(this.responseText);
			var heroes = json.heroes;
			var heroesArray = [];
			for (i=0, j=heroes.length; i<j; i++){
				var heroesData = {
					name : heroes[i].name,
					id : heroes[i].id,
					level : heroes[i].level,
					charClass : heroes[i].class,
					seasonal : heroes[i].seasonal
				};
				heroesArray.push(heroesData);
			}
			console.log(heroesArray);
			var db = require("db");
			db.save(heroesArray);
		},
		onerror : function(){
			
		},
		timeout : 5000
	});
	getData.open("GET", url);
	getData.send();
	
	
};

exports.getApi = getApi;