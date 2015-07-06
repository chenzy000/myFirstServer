var server = require("./server");
var router = require("./router");
var MsgConstant = require("./msg/msgConstant");
var module_login = require("./module/login");

var handle = {}
handle[MsgConstant.LOGIN_GROUP.REGIST] = module_login.RegistNewUser;
handle[MsgConstant.LOGIN_GROUP.LOGIN] = module_login.Login;
handle[MsgConstant.LOGIN_GROUP.LOGOUT] = module_login.Logout;

server.start(router.route , handle);