import StringTokenizer from "../../helpers/string.tokenizer";
import AndExpression from "./addexpression";
import NotExpression from "./notexpression";
import OrExpression from "./orexpression";
import Permission from "./permission";
import PermissionExpression from "./permissionexpression";
import Report from "./report";

class ExpressionBuilder {

    private _permissions: Array<PermissionExpression>;
    private _operators: Array<string>;

    constructor() {
        this._permissions = [];
        this._operators = [];
    }

    public build(report: Report): PermissionExpression {
        this.parse(report.getPermission());
        this.buildExpressions();
        if (this._permissions.length > 1 || this._operators.length > 0) {
            console.log("ERROR!");
        }
        return this._permissions.pop();
    }

    private parse(permission: string): void {
        let tokenizer: StringTokenizer = new StringTokenizer(permission);
        while (tokenizer.hasMoreTokens()) {
            let token: string;
            switch ((token = tokenizer.nextToken())) {
                case "and":
                case "not":
                case "or":
                    this._operators.push(token);
                    break;
                default:
                    this._permissions.push(new Permission(token));
                    break;
            }
        }
    }

    private buildExpressions() : void {
        while (this._operators.length > 0) {
            let operator: string = this._operators.pop();
            let initPermission: PermissionExpression;
            let altPermission: PermissionExpression;
            let expression: PermissionExpression

            switch (operator) {
                case "not":
                    initPermission = this._permissions.pop();
                    expression = new NotExpression(initPermission);
                    break;

                case "and":
                    initPermission = this._permissions.pop();
                    altPermission = this._permissions.pop();
                    expression = new AndExpression(initPermission, altPermission);
                    break;
                    
                case "or":
                    initPermission = this._permissions.pop();
                    altPermission = this._permissions.pop();
                    expression = new OrExpression(initPermission, altPermission);
                    break;

                default:
                    throw Error(`Unknown operator: ${operator}`);
            }
            
            this._permissions.push(expression);
        }
    }
};

export default ExpressionBuilder;