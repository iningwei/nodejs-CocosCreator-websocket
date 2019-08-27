import * as WebSocket from "ws"
import proto = require("./pb/proto");

const server = new WebSocket.Server({ port: 8083 });
server.on("listening", () => {
    console.log("服务器启动完毕！开始侦听");
});

server.on("connection", function connection(ws) {
	ws.on("message", function incoming(message) {
		console.log("received:%s", message);

		let u = proto.user.decode(<Uint8Array>message);
		console.log("decode, userid:" + u.userId + ", username:" + u.userName);
	});
	ws.send("hhhello");
});