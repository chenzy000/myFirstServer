var http = require("http");
var url = require("url");
var qs = require("querystring");
var sql = require('./nodemysql.js');


function start(route, handle){
	function onRequest(request, response){
	var pathname = url.parse(request.url).pathname;
	console.log("pathname = " + pathname);
	var postData = "";
	if (pathname != "/favicon.ico") {
		var method = request.method.toLowerCase();
		if (method == "get") {
                //sql.test(pathname, response);
		}else if (method == "post") {
			request.setEncoding("utf8");
			request.addListener("data",function(postDataChunk){
				postData += postDataChunk;
				console.log("Received POST data chunk '" + postDataChunk +"'.");
			});
			request.addListener("end",function(){
                    //route(handle, pathname, response, postData);
                    //var txt = qs.parse(postData).text;
                    var json = JSON.parse(postData);
                    route(handle, json, function (backJson) {
                        response.write(backJson);
                        response.end();
                    });
                    
    		});
		};		          	
	}
}
	http.createServer(onRequest).listen(8888);	
	console.log("Server has started");
}

exports.start = start;

