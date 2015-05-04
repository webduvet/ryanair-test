var 
		fs = require('fs'),
		path = require('path'),
		mime = require('mime'),
		cache = {},
		clc = require('cli-color'),
		http = require('http');

function send404(res){
	res.writeHead(404, {'Content-Type':'text/plain'});
	res.write('Error 404: resource not found.');
	res.end();
}

var server = http.createServer(function(req, res){
	var filePath = false;

	if (/^\/api/.test(req.url) ){
		var options = {
			hostname: 'ryanair-test.herokuapp.com',
			port: 80,
			path: req.url,
			method: 'GET',
			headers: {
				"Connection": "keep-alive",
				"Cache-Control": "max-age=0",
				"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"
			}
		};
		var req = http.request(options, function(rres){

			res.writeHead(200, { 
				'Content-Type': 'text/plain',
				'Access-Control-Allow-Origin': "*"
			});

			rres.setEncoding('utf8');
			rres.on('data', function (chunk) {
				res.write(chunk);
			});
			rres.on('end', function(){
				res.end();
			});
		});
		req.on('error', function(err){
			console.log(clc.red(err));
		});
		req.end();
	} else {
		send404(res);
	}
});

server.listen(3200, function(){
	console.log(clc.green("server listening on port 3200"));
	console.log(clc.yellow("To stop simply press Ctrl + C"));
});

process.on('SIGINT', function() {
    console.log(clc.yellow("\n\rStopping this simple proxy..."));
		process.exit();
});
