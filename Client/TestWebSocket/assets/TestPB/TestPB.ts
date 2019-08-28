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

const { ccclass, property } = cc._decorator;

@ccclass
export default class TestPB extends cc.Component {
    @property(cc.Label)
    nameLbl: cc.Label;
    @property(cc.Node)
    chatContentRoot: cc.Node;
    @property(cc.Node)
    chatItemPrefab: cc.Node;
    @property(cc.EditBox)
    editBox: cc.EditBox;

    private roleName: string;
    private role: proto.Role;
    private ws: WebSocket;
    start() {
        this.roleName = "jack" + Math.floor(Math.random() * 10000);
        this.nameLbl.string = this.roleName;
        this.role = new proto.Role();
        this.role.roleName = this.roleName;

        this.ws = new WebSocket("ws://192.168.2.31:8083");
        this.ws.binaryType = "arraybuffer";

        this.ws.onopen = this.onOpen.bind(this);
        this.ws.onmessage = (event) => {
            // console.log("client rcv:" + event.data);//  event.data若是二进制，为：ArrayBuffer类型
            this.unSerialize(event.data);
        }
        this.ws.onclose = function (event) {
        }.bind(this);
        this.ws.onerror = function (event) {
        }
    }


    private onOpen(event: MessageEvent) {
        console.log("和服务器连接建立啦");
        this.reqLogin();
    }

    private reqLogin() {
        let loginReq = new proto.LoginReq();
        loginReq.role = this.role;
        console.log("sedMsg:10001, " + JSON.stringify(loginReq.toJSON()));
        let encodedBuf: Uint8Array = proto.LoginReq.encode(loginReq).finish();
        this.ws.send(this.serialize(10001, encodedBuf));
    }



    private unSerialize(arrayBuf: ArrayBuffer) {
        let dv = new DataView(arrayBuf);
        //获得消息号
        let msgId = dv.getInt32(0);//TODO:大小端问题。dv.getInt32(0,true);
        //获得消息体
        let body: Uint8Array = new Uint8Array(arrayBuf, 4);

        let data: any = null;
        switch (msgId) {
            case 10002:
                data = proto.LoginRes.decode(body);
                break;
            case 10012:
                data = proto.ChatRes.decode(body);
                if (data.result === 1) {
                    this.addChatItem((<proto.ChatRes>data).chatData);
                }
                break;
        }

        console.log("rcvMsg: " + msgId + ",  " + JSON.stringify(data.toJSON()));
    }

    private serialize(msgId: number, bodyArray: Uint8Array): ArrayBuffer {
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

    public SendChat() {
        let content = this.editBox.string.trim();
        if (content == "") {
            console.log("请输入聊天文字");
            return;
        }

        let chatReq = new proto.ChatReq();
        chatReq.chatData = new proto.ChatData();
        chatReq.chatData.content = content;
        chatReq.chatData.dateTime = new Date().toTimeString().split(" ")[0];
        chatReq.chatData.sender = this.role;

        let encodedBuf: Uint8Array = proto.ChatReq.encode(chatReq).finish();
        this.ws.send(this.serialize(10011, encodedBuf));

        this.editBox.string = "";
    }

    private addChatItem(data: proto.IChatData) {
        let chatNode = cc.instantiate(this.chatItemPrefab);
        chatNode.parent = this.chatContentRoot;
        chatNode.active = true;

        let str = data.sender.roleName + "   " + data.dateTime + "   " + data.content;
        chatNode.getComponent(cc.Label).string = str;
    }

}
