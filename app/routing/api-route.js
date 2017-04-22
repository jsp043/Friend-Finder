var newMembers 	= require('../data/friendsdata.js');
var path = require('path');


module.exports = function(app){

//API 
	app.get('/api/survey', function(request, res){
		res.json(newMembers);
	});


app.post('/api/survey', function(request, res){


	var bestMatch = {
		name: "",
		location: "",
		age: "",
		friendDifference: 100
	};


var userData = request.body;
var userName = user.Data.name;
var userPhoto = userData.photo;
var userScores = userData.scores;




var totalDifference = 0;


for  (var i = 0 ; i<friends.length ; i++){
	console.log(friends[i].name);
	totalDifference = 0;

	
	for (var j=0; j< friends[i].scores[j]; j++){
		

		totalDifference += Math.abs(
			parseInt(userScores[j])-
			parseInt(friends[i].scores[j]))
			;

			
			if(totalDifference <=bestMatch.friendsDifference){

				

				bestMatch.name = friends [i].name;
				bestMatch.age = friends[i].age;
				bestMatch.photo = friends[i].location;
				bestMatch.friendDifference = totalDifference;
			}
	}
}
	
	friends.push(userData);

	
	res.json(bestMatch);

});
}