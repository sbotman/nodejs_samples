var fs   = require('fs');
var config = JSON.parse(fs.readFileSync('config.json'));
var host = config.host;
var port = config.port;
var express = require('express');

var app = express();

var users = {
	"1": {
		"name": "Sander",
		"twitter": "sanderbotman"
	},
	"2": {
		"name": "Jhon Doe",
		"twitter": "jdoe"
	}
}

app.use(app.router);
app.use(express.static(__dirname + "/pulic"));

app.get("/", function(request, response) {
	response.send("hello...");
});

app.get("/hello/:text", function(request, response) {
	response.send("Hello " + request.params.text);
});

app.get("/users/:id", function(request, response) {
	var user = users[request.params.id];
	if (user) {
   		response.send("<a href='http://twitter.com/" + user.twitter + "'>Follow " + user.name + " on twitter</a>");
   			} else {
		response.send("Sorry cannot find the user.", 404);
	}
})

app.listen(port, host);