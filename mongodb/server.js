var fs   = require('fs');
var config = JSON.parse(fs.readFileSync('config.json'));
var host = config.host;
var port = config.port;
var express = require('express');

var mongo =  require("mongodb");
var dbHost = "127.0.0.1";
var dbPort = mongo.Connection.DEFAULT_PORT;


var app = express();

app.use(app.router);
app.use(express.static(__dirname + "/pulic"));

app.get("/", function(request, response) {
	response.send("hello...");
});

app.get("/hello/:text", function(request, response) {
	response.send("Hello " + request.params.text);
});

app.get("/users/:id", function(request, response) {

	getUser(request.params.id, function(user){
		if (!user) {
			response.send("Sorry cannot find the user.", 404);
		} else {
			response.send("<a href='http://twitter.com/" + user.twitter + "'>Follow " + user.name + " on twitter</a>");
		}
	});
});

app.listen(port, host);


function getUser(id, callback) {

	var db   = new mongo.Db("nodejs-introduction", new mongo.Server(dbHost, dbPort, {}));

	db.open(function(error){
		console.log("We are connected to mongo on: " + dbHost + ":" + dbPort);

		db.collection("user", function(error, collection){

			console.log("We have the collection");

			collection.find({"id":id.toString()}, function(error, cursor){
				cursor.toArray(function(error, users){
					if (users.lengt == 0) {
						callback(false);
						// console.log("cannot find any users");
					} else {
						callback(users[0]);
						// console.log("found the user: ", users[0]);
					}
				});
			});
		});
	});	
}