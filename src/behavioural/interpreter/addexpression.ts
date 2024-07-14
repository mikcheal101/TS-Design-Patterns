import PermissionExpression from "./permissionexpression";
import User from "./user";

class AndExpression extends PermissionExpression {

    private _expressionOne: PermissionExpression;
    private _expressionTwo: PermissionExpression;

    constructor(exp1: PermissionExpression, exp2: PermissionExpression) {
        super();
        this._expressionOne = exp1;
        this._expressionTwo = exp2;
    }

    public override interpret(user: User): boolean {
        return this._expressionOne.interpret(user) && this._expressionTwo.interpret(user);
    }

    public override toString(): string {
        return `${this._expressionOne} AND ${this._expressionTwo}`;
    }
};

export default AndExpression;