import IFormatter from "./Iformatter";
import JsonFormatter from "./jsonFormatter";
import Message from "./message";
import { writeFileSync } from "fs";

class MessagePrinter {

    public writeMessage(message: Message, fileName: string): void {
        const formatter: IFormatter = new JsonFormatter();
        writeFileSync(fileName, formatter.format(message));
    }

};

export default MessagePrinter;