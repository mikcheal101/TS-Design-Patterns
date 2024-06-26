import BusinessCardDesigner from "./classAdapter/businesscarddesigner";
import Employee from "./classAdapter/employee";
import EmployeeAdapter from "./classAdapter/employee.adapter";
import EmployeeObjectAdapter from "./classAdapter/employeeobject.adapter";

const populateEmployee = (emp: Employee) => {
    emp.setFullName("Hirekaan Levi");
    emp.setJobTitle("CEO");
    emp.setOfficeLocation("Gwarimpa, Abuja.");
};

(function test() {

    /** Using Class / Two-way adapter */
    let empAdapter: EmployeeAdapter = new EmployeeAdapter();
    populateEmployee(empAdapter);

    let designer: BusinessCardDesigner = new BusinessCardDesigner();
    let card = designer.designCard(empAdapter);
    console.log(card);

    console.log("******************************************");
    /** Using Object Adapter  */
    let employee: Employee =  new Employee();
    populateEmployee(employee);
    let objAdapter: EmployeeObjectAdapter = new EmployeeObjectAdapter(employee);
    card = designer.designCard(objAdapter);
    console.log(card);
})();