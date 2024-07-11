import Employee from "./employee";
import LeaveApplicationType from "./helpers/leaveapplication.type";
import LeaveApplication from "./leave.application";
import LeaveApprover from "./leave.approver";

class Lead extends Employee {

    constructor(successor: LeaveApprover) {
        super("Project Lead", successor);
    }
    
    protected override processRequest(application: LeaveApplication) {
        if (application.getType() == LeaveApplicationType.Sick) {
            if (application.getNoOfDays() <= 2) {
                application.approve(this.getApproverRole());
                return true;
            }
        }

        return false;
    }

};

export default Lead;