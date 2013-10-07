var mongo =  require("mongodb");
var host = "127.0.0.1";
var port = mongo.Connection.DEFAULT_PORT;

function getUser(id, callback) {

	var db   = new mongo.Db("nodejs-introduction", new mongo.Server(host, port, {}));

	db.open(function(error){
		console.log("We are connected on: " + host + ":" + port);

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



getUser(1, function(user){
	if (!user) {
		console.log("No user found.");
	} else {
		console.log("We have a user: ", user);
	}
});

getUser("2", function(user){
	if (!user) {
		console.log("No user found.");
	} else {
		console.log("We have a user: ", user);
	}
});

getUser(3, function(user){
	if (!user) {
		console.log("No user found.");
	} else {
		console.log("We have a user: ", user);
	}
});