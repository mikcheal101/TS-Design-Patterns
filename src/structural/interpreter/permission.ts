import PermissionExpression from "./permissionexpression";
import User from "./user";

class Permission extends PermissionExpression {

    private _permission: string;

    constructor(permission: string) {
        super();
        this._permission = permission.toLowerCase().trim();
    }

    public override interpret(user: User): boolean {
        let matched = user.getPermissions().find((permission: string) => permission == this._permission);

        return !(matched == undefined || matched == null);
    }
};

export default Permission;