import PermissionExpression from "./permissionexpression";
import User from "./user";

class NotExpression extends PermissionExpression {

    private _expression: PermissionExpression;

    constructor(expression: PermissionExpression) {
        super();
        this._expression = expression;
    }
    
    public override interpret(user: User): boolean {
        return !(this._expression.interpret(user));
    }

    public override toString(): string {
        return `NOT ${this._expression}`;
    }

};

export default NotExpression;