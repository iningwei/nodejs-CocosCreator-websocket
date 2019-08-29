import * as WebSocket from "ws"
import proto = require("./pb/proto");

const server = new WebSocket.Server({ port: 8083 });
server.on("listening", () => {
	console.log("服务器启动完毕！开始侦听");
});

server.on("connection", function connection(ws, req) {
	const ip = req.connection.remoteAddress;
	console.log(ip + " 连接上服务器");
	ws.on("message", (data) => {
		console.log("received:%s,类型：%s", data, (typeof data));

		//虽然客户端那边传的时候是ArrayBuffer类型，但是经过调试到这里data类型为buffer，需要转换为ArrayBuffer
		let arrayBuf: ArrayBuffer = toArrayBuffer(data);
		let r = unSerialize(arrayBuf);
		if (r.msgId === 10001) {
			let loginRes = new proto.LoginRes();
			loginRes.result = 1;
			console.log("sedMsg:10002, " + JSON.stringify(loginRes.toJSON()));
			let encodedBuf: Uint8Array = proto.LoginRes.encode(loginRes).finish();
			ws.send(serialize(10002, encodedBuf));
		}
		else if (r.msgId === 10011) {
			let chatRes = new proto.ChatRes();
			chatRes.result = 1;
			chatRes.chatData = (<proto.ChatReq>(r.data)).chatData;
			console.log("sedMsg:10012, " + JSON.stringify(chatRes.toJSON()));
			let encodedBuf: Uint8Array = proto.ChatRes.encode(chatRes).finish();
			server.clients.forEach(function each(client) {
				client.send(serialize(10012, encodedBuf));
			});
		}

	});

});

function unSerialize(arrayBuf: ArrayBuffer): { msgId: number, data: any } {
	let dv = new DataView(arrayBuf);
	//获得消息号
	let id = dv.getInt32(0);//TODO:大小端问题。dv.getInt32(0,true);
	//获得消息体
	let body: Uint8Array = new Uint8Array(arrayBuf, 4);


	let result: any = null;
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

function serialize(msgId: number, bodyArray: Uint8Array): ArrayBuffer {
	let totalLen = 4;
	totalLen += (bodyArray.length * 1);//Uint8为一个字节

	//写入消息号
	let buf = new ArrayBuffer(totalLen);
	let dataView = new DataView(buf);
	dataView.setInt32(0, msgId);
	let offset = 4;
	//写入消息体
	for (let i = 0; i < bodyArray.length; i++) {
		const element = bodyArray[i];
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