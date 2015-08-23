var key = "5nrdpc5px2auztjame7xu3adbsrz5u3g";

var getApi = function(battleTag){
	var url = "https://us.api.battle.net/d3/profile/" + battleTag + "/?locale=en_US&apikey=" + key;
	console.log(url);
	var getData = Ti.Network.createHTTPClient({
		onload : function() {
			var json = JSON.parse(this.responseText);
			var heroes = json.heroes;
			var heroesArray = [];
			try {
			for (i=0, j=heroes.length; i<j; i++){
				var heroesData = {
					name : heroes[i].name,
					charId : heroes[i].id,
					level : heroes[i].level,
					charClass : heroes[i].class,
					seasonal : heroes[i].seasonal
				};
				heroesArray.push(heroesData);
			}
		}
		catch(e){
			alert("Enter proper battletag format, please.");
		}
			var arrowDb = require("arrowDb");
			arrowDb.save(heroesArray);
			var data = require("data");
			data.save(heroesArray);
		},
		onerror : function(){
			alert("There was an error processing your request. Please try again.");
		},
		timeout : 5000
		
	});
	getData.open("GET", url);
	getData.send();
	
	
};

exports.getApi = getApi;