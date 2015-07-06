var mysql = require("mysql");

var databaseName = "sakila";
var chatTable = "actor";

var selectAllCmd = "select * from ";
var createDatabaseCmd = "CREATE DATABASE "
var dropDatabaseCmd = "drop database ";

var connection = mysql.createConnection({
    host : "localhost",
    user : "root",           //数据库用户名
    password: "chenzeying", //数据库密码
    database: databaseName,        //数据库
});

function createDataBase() {
    connection.query(dropDatabaseCmd + "abcde", function (error, rows, fields) {
        
    });
}

function test(pathName, response){
	//var cmd = selectAllCmd + chatTable + " where actor_id = ?";
	var cmd = "SELECT * FROM actor"
    connection.query(cmd,[pathName], function (error, rows, fields) {
        response.writeHead(200, { "Content-Type": "text/plain" });
        //response.write(JSON.stringify(fields));
        response.write("------------------------------------------------------");        
        response.end(JSON.stringify(rows));
    });
    
}



exports.test = test;

