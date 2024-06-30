import IMessage from "./imessage";

class TextMessage implements IMessage {
    private message: string;

    constructor(msg: string) {
        this.message = msg;
    }
    getContent(): string {
        return this.message;
    }

};

export default TextMessage;