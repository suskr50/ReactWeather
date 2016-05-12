var express = require('express');

	//Create our app
	var app = express();
	const port = process.env.PORT || 3000;

app.use(function(req, res, next){
	if (req.headers.) {

	}else {

	}

});

	app.use (express.static('public'));

	app.listen(port,function() {
		console.log('Express sever is up on port  ' + port);
	})