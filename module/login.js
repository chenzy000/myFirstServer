//var exec = require("child_process").exec;
//var fs = require("fs");
var querystring = require("querystring");
//var MsgConstant = require("../msgConstant");
var mysql = require("mysql");
var accDataBase = require('../mysqlBase/AccBase.js');
var MsgConstant = require("../msg/msgConstant");

function CheckAccAndPsw(json){
    if (json.username === null || json.username === undefined || json.username === '') {
        return false;
    }
    else if (json.userpassword === null || json.userpassword === undefined || json.userpassword === '') {
        return false;
    }
    return true;
}

function RegistNewUser(json, ack){
    var ackMsg = new Object();
    ackMsg.msgCmd = json.msgCmd;
    ackMsg.errorMsg = "success";
    if (!CheckAccAndPsw(json)) {
        ackMsg.errorMsg = "账号或密码为空！";
        ack(JSON.stringify(ackMsg));
        return;
    }
    var onAddAcc = function (errorMsg) {
        if (errorMsg !== null && errorMsg !== undefined && errorMsg !== '') {
            ackMsg.errorMsg = errorMsg;
        }
        ack(JSON.stringify(ackMsg));
    }
    var onCheckIsExist = function (isExist) {
        if (isExist) {
            ackMsg.errorMsg = "用户名已经存在";
            ack(JSON.stringify(ackMsg));
        }
        else {
            accDataBase.addAcc(json.username, json.userpassword, onAddAcc);
        }
    }
    accDataBase.isExistAcc(json.username,onCheckIsExist);
    
}

function Login(json, ack){
    var ackMsg = new Object();
    ackMsg.msgCmd = ackMsg.msgCmd = json.msgCmd;
    ackMsg.errorMsg = "success";
    //ackMsg.id = json.id;    
    if (!CheckAccAndPsw(json)) {
        ackMsg.errorMsg = "账号或密码为空！";
        ack(JSON.stringify(ackMsg));
        return;
    }
    var onCheckPsw = function (errorMsg){
        if (errorMsg === null) {                        
            ack(JSON.stringify(ackMsg));
        }
        else {
            ackMsg.errorMsg = errorMsg;
            ack(JSON.stringify(ackMsg));
        }
    }
    accDataBase.checkPsw(json.username, json.userpassword, onCheckPsw);
}

function Logout(json, ack){
    var ackMsg = new Object();
    ackMsg.msgCmd = ackMsg.msgCmd = json.msgCmd;;
    ackMsg.errorMsg = "success";
    ack(JSON.stringify({ errorMsg: "Logout" }));
}

exports.RegistNewUser = RegistNewUser;
exports.Login = Login;
exports.Logout = Logout;