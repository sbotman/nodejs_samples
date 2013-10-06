var fs   = require('fs');
console.log('starting');
fs.writeFile("./write_a_sync.txt","This will go into the file", function(error) {
	console.log("written file");	
});
console.log('finished!');
