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
server.on("connection", function connection(ws, req) {
    var ip = req.connection.remoteAddress;
    console.log(ip + " 连接上服务器");
    ws.on("message", function (data) {
        console.log("received:%s,类型：%s", data, (typeof data));
        //虽然客户端那边传的时候是ArrayBuffer类型，但是经过调试到这里data类型为buffer，需要转换为ArrayBuffer
        var arrayBuf = toArrayBuffer(data);
        var r = unSerialize(arrayBuf);
        if (r.msgId === 10001) {
            var loginRes = new proto.LoginRes();
            loginRes.result = 1;
            console.log("sedMsg:10002, " + JSON.stringify(loginRes.toJSON()));
            var encodedBuf = proto.LoginRes.encode(loginRes).finish();
            ws.send(serialize(10002, encodedBuf));
        }
        else if (r.msgId === 10011) {
            var chatRes = new proto.ChatRes();
            chatRes.result = 1;
            chatRes.chatData = (r.data).chatData;
            console.log("sedMsg:10012, " + JSON.stringify(chatRes.toJSON()));
            var encodedBuf_1 = proto.ChatRes.encode(chatRes).finish();
            server.clients.forEach(function each(client) {
                client.send(serialize(10012, encodedBuf_1));
            });
        }
    });
});
function unSerialize(arrayBuf) {
    var dv = new DataView(arrayBuf);
    //获得消息号
    var id = dv.getInt32(0); //TODO:大小端问题。dv.getInt32(0,true);
    //获得消息体
    var body = new Uint8Array(arrayBuf, 4);
    var result = null;
    switch (id) {
        case 10001:
            result = proto.LoginReq.decode(body);
            break;
        case 10011:
            result = proto.ChatReq.decode(body);
            break;
    }
    console.log("rcvMsg: " + id + ",  " + JSON.stringify(result.toJSON()));
    return { msgId: id, data: result };
}
function serialize(msgId, bodyArray) {
    var totalLen = 4;
    totalLen += (bodyArray.length * 1); //Uint8为一个字节
    //写入消息号
    var buf = new ArrayBuffer(totalLen);
    var dataView = new DataView(buf);
    dataView.setInt32(0, msgId);
    var offset = 4;
    //写入消息体
    for (var i = 0; i < bodyArray.length; i++) {
        var element = bodyArray[i];
        dataView.setUint8(offset, element);
        offset += 1;
    }
    return dataView.buffer;
}
//Buffer转ArrayBuffer
function toArrayBuffer(buf) {
    var ab = new ArrayBuffer(buf.length);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buf.length; ++i) {
        view[i] = buf[i];
    }
    return ab;
}
//ArrayBuffer转Buffer
function toBuffer(ab) {
    var buf = new Buffer(ab.byteLength);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buf.length; ++i) {
        buf[i] = view[i];
    }
    return buf;
}
//# sourceMappingURL=index.js.map