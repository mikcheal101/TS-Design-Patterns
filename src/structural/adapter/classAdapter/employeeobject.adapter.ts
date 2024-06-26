import Employee from "./employee";
import ICustomer from "./icustomer";

class EmployeeObjectAdapter  implements ICustomer {

    private adaptee: Employee; 

    constructor(employee: Employee) {
        this.adaptee = employee;
    }

    public getName(): string {
        return this.adaptee.getFullName();
    }
    
    public getDesignation(): string {
        return this.adaptee.getJobTitle();
    }
    
    public getAddress(): string {
       return this.adaptee.getOfficeLocation();
    }

};

export default EmployeeObjectAdapter;