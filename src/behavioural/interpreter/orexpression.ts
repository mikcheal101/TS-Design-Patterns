import PermissionExpression from "./permissionexpression";
import User from "./user";

class OrExpression extends PermissionExpression {

    private _expressionOne: PermissionExpression;
    private _expressionTwo: PermissionExpression;

    constructor(expressionOne: PermissionExpression, expressionTwo: PermissionExpression) {
        super();
        this._expressionOne = expressionOne;
        this._expressionTwo = expressionTwo;
    }

    public override interpret(user: User): boolean {
        return this._expressionOne.interpret(user) || this._expressionTwo.interpret(user);
    }

    public override toString(): string {
        return `${this._expressionOne} OR ${this._expressionTwo}`;
    }
};

export default OrExpression;