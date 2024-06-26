/**
 * Adaptee class
 */
class Employee {
    private fullName: string;
    private jobTitle: string;
    private officeLocation:string;

    public setFullName(fullName: string): void {
        this.fullName = fullName;
    }

    public getFullName(): string {
        return this.fullName;
    }

    public setJobTitle(jobTitle: string): void {
        this.jobTitle = jobTitle;
    }

    public getJobTitle(): string {
        return this.jobTitle;
    }

    public setOfficeLocation(officeLocation: string): void {
        this.officeLocation = officeLocation;
    }
    
    public getOfficeLocation(): string {
        return this.officeLocation;
    }

};

export default Employee;