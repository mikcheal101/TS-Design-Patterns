class Report {

    private _name:string;
    // "NOT ADMIN", "FINANCE_USER AND ADMIN"
    private _permission:string;

    public constructor(name: string, permission: string) {
        this._permission = permission;
        this._name = name;
    }

    public getName(): string {
        return this._name;
    }

    public getPermission(): string {
        return this._permission;
    }
};

export default Report;