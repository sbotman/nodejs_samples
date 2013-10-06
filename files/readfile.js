var fs   = require('fs');
console.log('starting');

var content = fs.readFileSync("./config.json");
console.log('content: ' + content);

var config = JSON.parse(content);
console.log('config: ', config);
console.log('host: ', config.host);

//Execute your code here;
