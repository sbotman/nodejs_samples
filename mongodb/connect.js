var mongo =  require("mongodb");
var host = "127.0.0.1";
var port = mongo.Connection.DEFAULT_PORT;
var db   = new mongo.Db("nodejs-introduction", new mongo.Server(host, port, {}));

db.open(function(error){
	console.log("We are connected on: " + host + ":" + port);

	db.collection("user", function(error, collection){
		console.log("We have the collection");

		collection.insert ({
			id: "1",
			name: "Sander Botman",
			email: "sbotman@schubergphilis.com"
		}, function(){
			console.log("Added Sander");
		});

		collection.insert ({
			id: "2",
			name: "Bob Bakker",
			email: "bbakker@company.com"
		}, function(){
			console.log("Added Bob")
		});

	});

});

