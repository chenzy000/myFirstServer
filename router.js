function route(handle, json, callback){
    var msgCmd = json.msgCmd;
  if(typeof handle[msgCmd]==='function'){
    handle[msgCmd](json, callback);
  }else{
    //console.log("No request handler found for "+ pathname);
    //response.writeHead(404,{"Content-Type":"text/plain"});
    //response.write("404 Not found");
    //response.end();
    callback(JSON.stringify({errorMsg:"未找到处理函数！"}));
  }
}

exports.route = route;