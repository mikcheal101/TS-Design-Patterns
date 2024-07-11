import LeaveApplication from "./leave.application";
import LeaveApprover from "./leave.approver";

abstract class Employee extends LeaveApprover {
    
    private _role: string;
    private _successor: LeaveApprover;

    constructor(role: string, successor: LeaveApprover) {
        super();
        this._role = role;
        this._successor = successor;
    }

    protected abstract processRequest(leave: LeaveApplication): boolean;

    public override processLeaveApplication(leaveApplication: LeaveApplication): void {
        if (!this.processRequest(leaveApplication) && (this._successor != null && this._successor != undefined)) {
            this._successor.processLeaveApplication(leaveApplication);
        } 
    }

    public override getApproverRole(): string {
        return this._role;
    }
};

export default Employee;