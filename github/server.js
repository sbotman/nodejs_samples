var github = require('./github.js');

github.getRepos('sbotman', function(repos) {
	console.log('Sander repos:', repos);

});

