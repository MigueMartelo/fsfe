const http = require('http');

http.createServer(function(req, res){
	res.write("On the way to being a full snack engineer!");
	res.end();
}).listen(3000);

console.log("Server starts on port 3000");
