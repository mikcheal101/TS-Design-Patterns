import ErrorMessage from "./errormessage";

// A concerete flyweight. Instance is shared.
class SystemErrorMessage extends ErrorMessage {

    // intrinsic state
    private messageTemplate: string; // replace $errorCode with the error message
    private helpUrl: string;

    constructor(messageTemplate: string, helpUrl: string) {
        super();
        this.messageTemplate = messageTemplate;
        this.helpUrl = helpUrl;
    }

    public override getText(code: string): string {
        return `${this.messageTemplate.replace("$errCode", code)} ${this.helpUrl}`;
    }
};

export default SystemErrorMessage;