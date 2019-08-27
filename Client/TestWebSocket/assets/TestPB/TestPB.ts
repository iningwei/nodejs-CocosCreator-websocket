import { user } from "../pb/proto";
import proto = require("../pb/proto");

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class TestPB extends cc.Component {

    private ws: WebSocket;
    start() {
        console.log("go!");
        this.ws = new WebSocket("ws://192.168.2.31:8083");
        // this.ws.binaryType="arraybuffer";        
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
}
