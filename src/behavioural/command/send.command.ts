import Command from "./command";

class SendCommand extends Command {
    
    public override execute(): void {
        throw new Error("Method not implemented.");
    }

};

export default SendCommand;