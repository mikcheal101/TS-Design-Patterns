import LeaveApplicationStatus from "./helpers/leaveapplication.status";
import LeaveApplicationType from "./helpers/leaveapplication.type";

class LeaveApplication {
    private _type: LeaveApplicationType;
    private _from: Date;
    private _to: Date;
    private _processedBy: string;
    private _status: LeaveApplicationStatus; 

    constructor(type: LeaveApplicationType, from: Date, to: Date) {
        this._type = type;
        this._from = new Date(from);
        this._to = new Date(to);
        this._status = LeaveApplicationStatus.Pending;
    }

    public getType(): LeaveApplicationType {
        return this._type;
    }

    public getFrom(): Date {
        return this._from;
    }

    public getTo(): Date {
        return this._to;
    }

    public getProcessedBy(): string {
        return this._processedBy;
    }

    public getStatus(): LeaveApplicationStatus {
        return this._status;
    }

    public getNoOfDays(): number {
        return this._to.getDate() - this._from.getDate();
    }

    public approve(approver: string): boolean {
        return false;
    }

    public static getBuilder(): LeaveApplication {
        return new LeaveApplication(null, null, null);
    }

    public withType(type: LeaveApplicationType): LeaveApplication {
        if (type != null) {
            this._type = type;
        }

        return this;
    }

    public setFrom(from: Date): LeaveApplication {
        if (from != null) {
            this._from = new Date(from);
        }
        
        return this;
    }

    public setTo(to: Date): LeaveApplication {
        if (to != null) {
            this._to = new Date(to);
        }

        return this;
    }

    public build(): LeaveApplication {
        return this;
    }
};

export default LeaveApplication;