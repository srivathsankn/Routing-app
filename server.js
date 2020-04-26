var express = require('express');
var app = express();

app.use(express.static(__dirname + ' /dist'));

app.all("*", function(req, res){
	res.setHeader("Content-Type","text/html");
	res.status(200).sendFile(__dirname + '/dist/index.html')
})

var server = app.listen(8000, function(){
	console.log("Listening to port 8000");

})