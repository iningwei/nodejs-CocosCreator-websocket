"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var WebSocket = __importStar(require("ws"));
var proto = require("./pb/proto");
var server = new WebSocket.Server({ port: 8083 });
server.on("listening", function () {
    console.log("服务器启动完毕！开始侦听");
});
server.on("connection", function connection(ws) {
    ws.on("message", function incoming(message) {
        console.log("received:%s", message);
        var u = proto.user.decode(message);
        console.log("decode, userid:" + u.userId + ", username:" + u.userName);
    });
    ws.send("hhhello");
});
