var path = require('path'); 

module.exports = function(app){

app.get('/', function(req, res){
	
	res.sendFile(path.join('/../public/home.html'));
});

app.get('/survey', function(req, res){

	res.sendFile(path.join('/../public/survey.html'));
});

app.use(function(req, res){
		res.sendFile(path.join('/../public/home.html'));
	});


}