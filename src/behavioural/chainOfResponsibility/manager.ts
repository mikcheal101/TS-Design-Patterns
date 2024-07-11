import Employee from "./employee";
import LeaveApplicationType from "./helpers/leaveapplication.type";
import LeaveApplication from "./leave.application";
import LeaveApprover from "./leave.approver";

class Manager extends Employee {

    constructor(nextApprover: LeaveApprover) {
        super("Manager", nextApprover);
    }

    protected override processRequest(application: LeaveApplication) {
        switch (application.getType()) {
            case LeaveApplicationType.Sick:
                application.approve(this.getApproverRole());
                return true;

            case LeaveApplicationType.PTO:
                if (application.getNoOfDays() <= 5) {
                    application.approve(this.getApproverRole());
                    return true;
                }
        }

        return false;
    }
};

export default Manager;