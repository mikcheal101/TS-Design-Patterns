import ExpressionBuilder from "./expressionbuilder";
import PermissionExpression from "./permissionexpression";
import Report from "./report";
import User from "./user";


(function main() {
    const report: Report =  new Report("Money report", "FINANCE_ADMIN OR ADMIN");
    const expressionBuilder: ExpressionBuilder = new ExpressionBuilder();

    const expression: PermissionExpression = expressionBuilder.build(report);
    console.log(expression);

    const user: User = new User("David Musa", ["USER", "ADMIN"]);
    console.log(`User access report: ${expression.interpret(user)}`);
    
    return 0;

})();





