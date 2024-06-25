import Message from "./message";

interface IFormatter {

    format(message: Message): string;
};

export default IFormatter;