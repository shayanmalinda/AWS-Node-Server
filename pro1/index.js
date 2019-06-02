var http = require('http');
http.createServer(
	function(req,res){
		res.write("Hello Amazon");
		res.end();
	}
).listen(8080);
