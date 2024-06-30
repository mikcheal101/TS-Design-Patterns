import { escape } from "querystring";
import IMessage from "./imessage";

class HtmlEncodedMessage implements IMessage {

    private message: IMessage; 
    constructor(msg: IMessage) {
        this.message = msg;
    }

    getContent(): string {
       return this.message.getContent().replace(/<[^>]*>/g, '');
    }
    
};

export default HtmlEncodedMessage;