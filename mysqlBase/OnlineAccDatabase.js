//操作在线账号数据
var mysql = require("mysql");

var databaseName = "nodechat";
var accTable = "User_Online_Acc";

var selectAllCmd = "select * from ";
var createDatabaseCmd = "CREATE DATABASE "
var dropDatabaseCmd = "drop database ";

/**
 * OnlineAcc prototype.
 *
 * @module
 */
var OnlineAcc = module.exports = {};

var connection = mysql.createConnection({
    host : "localhost",
    user : "root",           //数据库用户名
    password: "chenzeying", //数据库密码
    database: databaseName,        //数据库
});

OnlineAcc.CheckOnlineState = function (acc,cb){
    var cmd = "SELECT * FROM " + accTable + " where acc_id=?";
    connection.query(cmd, [acc], function (error, rows, fields) {
        if (error) {
            ca(error, true);
            return;
        }
        if (rows && rows.length != 0) {
            var nowTime = Date.now();
            var lastTime = rows[0]["lastTime_unix"];
            if (nowTime - lastTime > 100) {
                OnlineAcc.RemoveFromOnline(acc, function (error) {
                    cb(null, false);
                });                
            }
            else {
                cb(null, true);
            }
        }
        else {
            cb(null,false);
        }
    });
}

OnlineAcc.AddToOnline = function (acc, cb){
    OnlineAcc.CheckOnlineState(acc, function (error, isOnline) {
        if (error) {
            cb(error);
            return;
        }
        if (isOnline) {
            OnlineAcc.UpdateOnline(acc, cb);
        }
        else {
            var nowTimeUnix = Date.now();
            var nowTime = new Date(nowTimeUnix);
            var cmd = "insert into " + accTable + "(acc_id,lastTime_unix,lastTime) values(?,?,?)";
            connection.query(cmd, [acc, nowTimeUnix, nowTime], function (error, rows, fields) {
                cb(error);
            });
        }
    });
    
}

OnlineAcc.RemoveFromOnline = function (acc, cb){
    var cmd = "delete from " + accTable + " where acc_id=?";
    connection.query(cmd, [acc], function (error, rows, fields) {
        cb(error);
    });
}

OnlineAcc.UpdateOnline = function (acc, cb){
    var nowTimeUnix = Date.now();
    var nowTime = new Date(nowTimeUnix);
    var cmd = "update " + accTable + " set lastTime_unix=?,lastTime=? where acc_id=?";
    connection.query(cmd, [nowTimeUnix,nowTime, acc], function (error, rows, fields) {
        cb(error);
    });
}

OnlineAcc.CleanOnlint = function (cb){
    var cmd = "truncate table "+accTable;
    connection.query(cmd, function (error, rows, fields) {
        cb(error);
    });
}

OnlineAcc.CleanOnlint(function (error) { 
    console.log("finish------------" + error);
});
