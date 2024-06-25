import Message from "./extras/di/message";
import MessagePrinter from "./extras/di/messagePrinter";

(function main() {

    const message: Message = new Message("This is a message");
    const messagePrinter: MessagePrinter = new MessagePrinter();
    messagePrinter.writeMessage(message, "text_msg.txt");
})();