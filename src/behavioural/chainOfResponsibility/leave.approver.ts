import LeaveApplication from "./leave.application";

abstract class LeaveApprover {
    public abstract processLeaveApplication(leaveApplication: LeaveApplication): void; 
    public abstract getApproverRole(): string; 
};

export default LeaveApprover;