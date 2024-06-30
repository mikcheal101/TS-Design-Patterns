import IMessage from "./imessage";

class Base64EncodedMessage implements IMessage {

    private message: IMessage;

    constructor(msg: IMessage) {
        this.message = msg;
    }

    getContent(): string {
        throw new Error("Method not implemented.");
    }

};

export default Base64EncodedMessage;