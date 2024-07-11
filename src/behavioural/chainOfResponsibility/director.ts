import Employee from "./employee";
import LeaveApplicationType from "./helpers/leaveapplication.type";
import LeaveApplication from "./leave.application";
import LeaveApprover from "./leave.approver";

class Director extends Employee {

    constructor(approver: LeaveApprover) {
        super("Director", approver);
    }

    protected override processRequest(application: LeaveApplication) {
        if (application.getType() == LeaveApplicationType.PTO) {
            application.approve(this.getApproverRole());
            return true;
        }

        return false;
    }

};

export default Director;