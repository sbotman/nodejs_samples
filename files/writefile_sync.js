var fs   = require('fs');
console.log('starting');
fs.writeFileSync("./write_sync.txt","This will go into the file");
console.log('finished!');
