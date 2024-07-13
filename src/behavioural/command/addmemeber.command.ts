import Command from "./command";
import EWSService from "./ews.service";

class AddMemberCommand extends Command {

    private _emailAddress: string;
    private _listName: string;
    private _receiver: EWSService;

    constructor(email: string, lname: string, service: EWSService) {
        super();
        this._emailAddress = email;
        this._listName = lname;
        this._receiver = service;
    }

    public override execute(): void {     
        this._receiver.addMember(this._emailAddress, this._listName);   
    }
};

export default AddMemberCommand;