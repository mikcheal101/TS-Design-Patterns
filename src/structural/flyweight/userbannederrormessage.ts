import ErrorMessage from "./errormessage";

class UserBannedErrorMessage extends ErrorMessage {

    private case: string;
    private remarks: string;
    private bandDuration: Date;
    private msg: string;

    constructor(caseId: string) {
        super();
        // load from db
        this.case = caseId;
        this.remarks = " You violated the terms of use.";

        this.bandDuration =  new Date(Date.now());
        this.bandDuration.setDate(this.bandDuration.getDate() + 2);

        this.msg = "You are BANNED. Sorry. \n More information: \n";
        this.msg = `${this.msg}${this.case}\n`;
        this.msg = `${this.msg}${this.remarks}`;
        this.msg = `${this.msg} Banned for: ${this.bandDuration.getHours()} Hours.`;
    }
    
    public override getText(code: string): string {
        return this.msg;
    }

};

export default UserBannedErrorMessage;