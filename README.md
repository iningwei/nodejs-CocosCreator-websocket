## 3，WebSocket引入protobuf协议

## 前言
nodejs游戏服务器开发系列文章以nodejs+Typescript+CocosCreator+WebSocket为例，搭建服务器和客户端。

 
## WebSocket介绍
官网：https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket

https://www.cnblogs.com/fps2tao/p/7875618.html 模拟股票涨跌

https://www.cnblogs.com/stoneniqiu/p/5373993.html

## nodejs集成WebSocket
nodejs的websocket库托管在git上:https://github.com/websockets/ws
api文档为：https://github.com/websockets/ws/blob/master/doc/ws.md



项目内安装方法：
服务器项目目录Server下执行 ``npm install ws``
会在node_modules目录下添加ws和async-limiter文件夹。
继续执行 ``npm install @types/ws``,会在node_modules/@types目录下添加ws文件夹，其内为ws模块的生命文件。


## 写一个简单的websocket服务器
打开index.ts，复制以下内容：
```typescript
import * as WebSocket from "ws"
const server = new WebSocket.Server({ port: 8083 });
server.on("listening", () => {
    console.log("服务器启动完毕！开始侦听");
});

server.on("connection", function connection(ws) {
    ws.on("message", function incoming(message) {
        console.log("received:%s", message);         
    });
    ws.send("hhhello");
});
```

## 客户端代码
客户端貌似什么都不需要安装，自带websocket?
```typescript
    private ws: WebSocket;
    start() {
        console.log("go!");
        this.ws = new WebSocket("ws://192.168.2.31:8083");
        this.ws.binaryType = "arraybuffer";

        this.ws.onopen = this.onOpen.bind(this);
        this.ws.onmessage = function (event) {
            console.log("client rcv:" + event.data);
        }.bind(this);
        this.ws.onclose = function (event) {
            console.log("服务器已关");
        }.bind(this);
        this.ws.onerror = function (event) {
        }.bind(this);
    }

    private onOpen(event: MessageEvent) {
        console.log("连接建立啦");
        this.sendData(JSON.stringify({
            ctype: "login",
            data: {
                name: "jack",
                age: 22
            }
        }));
    }
    private sendData(data) {
        this.ws.send(data);
    }
```

## 参考文档：






