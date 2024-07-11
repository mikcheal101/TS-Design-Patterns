import Director from "./director";
import LeaveApplicationType from "./helpers/leaveapplication.type";
import Lead from "./lead";
import LeaveApplication from "./leave.application";
import LeaveApprover from "./leave.approver";
import Manager from "./manager";

const createChain = (): LeaveApprover => {
    const director: Director = new Director(null);
    const manager: Manager = new Manager(director);
    const lead: Lead = new Lead(manager);
    return lead;;
};

(function main() {
    
    const later: Date = new Date();
    later.setDate(later.getDate() + 5);

    const application: LeaveApplication = LeaveApplication.getBuilder()
        .withType(LeaveApplicationType.Sick)
        .setFrom(new Date)
        .setTo(later)
        .build();

    console.log(application);
    console.log("***************************************");

    const approver: LeaveApprover = createChain();
    approver.processLeaveApplication(application);

    console.log(application);
})();




