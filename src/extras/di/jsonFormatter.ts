import IFormatter from "./Iformatter";
import Message from "./message";


class JsonFormatter implements IFormatter {
    format(message: Message): string {
        return `updated: ${message.getMessage()}`;
    }

};

export default JsonFormatter;