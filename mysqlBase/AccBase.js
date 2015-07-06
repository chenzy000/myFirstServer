//操作账号数据库
var mysql = require("mysql");

var databaseName = "nodechat";
var accTable = "User_Acc";

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

function test(pathName, response) {
    //var cmd = selectAllCmd + chatTable + " where actor_id = ?";
    var cmd = "SELECT * FROM actor"
    connection.query(cmd, [pathName], function (error, rows, fields) {
        response.writeHead(200, { "Content-Type": "text/plain" });
        //response.write(JSON.stringify(fields));
        response.write("------------------------------------------------------");
        response.end(JSON.stringify(rows));
    });
    
}

function isExistAcc(acc, callback){
    var cmd = "select * from "+ accTable + " where acc_id=?";
    connection.query(cmd, [acc], function (error, rows, fields) {        
        callback(!error && rows && rows.length != 0);        
    });
}

function addAcc(acc, psw, callback){
    var cmd = "insert into "+ accTable + "(acc_id,acc_psw) values(?,?)";
    connection.query(cmd, [acc,psw], function (error, rows, fields) {
        callback(error);
    });
}

function checkPsw(acc, psw, callback){
    var cmd = "select * from " + accTable + " where acc_id=?";
    connection.query(cmd, [acc], function (error, rows, fields) {
        if (error) {
            callback(error);
            return;
        }
        if (rows && rows.length != 0) {
            var tmpPsw = rows[0]["acc_psw"];
            if (tmpPsw === psw) {
                callback(null);
            }
            else {
                callback("密码错误");
            }
        }
        else {
            callback("账号不存在");
        }
        
    });
}

exports.test = test;
exports.isExistAcc = isExistAcc;
exports.addAcc = addAcc;
exports.checkPsw = checkPsw;