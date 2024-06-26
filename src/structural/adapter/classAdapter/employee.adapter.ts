import Employee from "./employee";
import ICustomer from "./icustomer";

class EmployeeAdapter extends Employee implements ICustomer {

    public getName(): string {
        return this.getFullName();
    }

    public getDesignation(): string {
        return this.getJobTitle();
    }

    public getAddress(): string {
        return this.getOfficeLocation();
    }

};

export default EmployeeAdapter;