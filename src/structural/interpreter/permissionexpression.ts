import User from "./user";

abstract class PermissionExpression {
    public abstract interpret(user: User): boolean;
};

export default PermissionExpression;