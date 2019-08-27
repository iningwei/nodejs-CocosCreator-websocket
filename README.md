## 3，WebSocket引入protobuf协议

## 前言
nodejs游戏服务器开发系列文章以nodejs+Typescript+CocosCreator+WebSocket为例，搭建服务器和客户端。

## xxx
暂时无纯ts框架。

protobufjs

git地址：https://github.com/protobufjs/protobuf.js
README有详细的说明。还有各个不同库(minimal,light,full)的说明
本文以完整的protobufjs库为例使用。

笔者使用npm install protobufjs后发现CHANGELOG.md文档中写的是6.8.8.而在releases中最新的才6.8.6。
于是从npm install protobufjs中找到需要的js库（dist/protobuf.js）。据说6以上版本protobufjs已经集成了long,bytebuffer库，不需要额外集成了。


同时也可以参考这个文档：https://www.npmjs.com/package/protobufjs

## proto文件
搞个测试文件，比如命名为test.proto,内容为：
```
message user{
	required int32 userId=1;
	required string userName=2;
}
```

## 静态文件
推荐使用静态文件的方式，即预先把proto文件翻译为js文件。

需要全局安装pbjs``npm install protobufjs -g``。可以使用pbjs命令用于把proto文件翻译为js静态文件。同时还可以生成对应的声明文件*.d.ts


``pbjs -t static-module -w commonjs -o proto.js *.proto``
把目录下所有的proto文件一起生成静态文件到proto.js中

``pbts -o proto.d.ts proto.js``
为proto.js文件生成生命文件：proto.d.ts。


最终会有proto.js和proto.d.ts文件

静态方式缺点，会额外生成静态文件，导致包体变大，特别是微信小游戏这种对包体敏感的平台。

## 服务端集成protobufjs
src目录下新建pb文件夹，把上述生成的静态文件proto.js，proto.d.ts和protobuf.js都放到pb文件夹中。
并修改proto.js的var $protobuf = require("protobufjs/minimal");
为var $protobuf = require("./protobuf");
修改proto.d.ts的第一句import * as $protobuf from "protobufjs";为import * as $protobuf from "./protobuf";





复制以下内容到 index.ts

```
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
```
### 服务端报错
ctrl+shift+b build的时候顺利。
Debug开启服务器的时候index.ts 报错：Error: Cannot find module './pb/proto'
找了N久才找到原因（一开始一直在查模块方向的错误）。我服务器是用ts开发，最终生成的代码是在dist目录中。
编译的时候只是把ts代码编译到了dist目录，但是proto.js文件和protobuf.js文件我还放在src目录下的pb文件夹呢。

于是在dist目录中创建一个pb文件夹，同时把proto.js，protobuf.js拷贝过去，再次运行一切顺利。


## 客户端集成protobufjs
assets目录下新建文件夹：pb
把上述提到的protobuf.js放入pb目录下。设置导入为插件。同时还要勾选允许编辑器加载。
同时把proto.js和proto.d.ts放到pb目录下

```
creator在构建时候会将我们编辑器里所有的js脚本都打包到一个project.js的文件中，原生(native)的话就是project.jsc,如果我们的protobuf.js打包进去就会报错了，，所以这里需要导入为插件，这样做是为了避免错误
```

同时由于客户端中已经设置了插件模式。故proto.js中这句var $protobuf = require("protobufjs/minimal");需要改成：var $protobuf=protobuf;

还要修改proto.d.ts的第一句import * as $protobuf from "protobufjs";为import * as $protobuf from "./protobuf";

```
    private ws: WebSocket;
    start() {
        console.log("go!");
        this.ws = new WebSocket("ws://192.168.2.31:8083");
        this.ws.binaryType="arraybuffer";        
        this.ws.onopen = this.onOpen.bind(this);
        this.ws.onmessage = function (event) {
            console.log("client rcv:" + event.data);
        }
        this.ws.onclose = function (event) {
        }.bind(this);
        this.ws.onerror = function (event) {
        }
    }


    private onOpen(event: MessageEvent) {
        console.log("连接建立啦");
        
        let u: user = new user()
        u.userId = 1;
        u.userName = "toms";

        let encoded = proto.user.encode(u).finish();
        this.sendData(encoded);

        let xxx = proto.user.decode(encoded);
        console.log("嘿嘿：" + xxx.userName);
    }
    private sendData(data) {
        this.ws.send(data);
    }
```
注意客户端设置了binaryType为arraybuffer(笔者注释了这行代码，也没有发现有啥问题)

需要注意：客户端decode后还要调用finish()，不要服务端那边解析不出来。

## 总结
经过上述步骤，服务器可以顺利获得客户端发送的user数据，并能解析。

 
## 参考文档：
[TS项目中使用Protobuf的解决方案](https://segmentfault.com/a/1190000012820412?utm_source=tag-newest)






