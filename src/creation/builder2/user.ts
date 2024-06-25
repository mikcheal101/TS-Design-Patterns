import Address from "./address";

class User {
    private firstName: string;
    private lastName: string;
    private birthday: Date;
    private address: Address;

    public setFirstName(fName: string): void {
        this.firstName = fName;
    }

    public setLastName(lName: string): void {
        this.lastName = lName;
    }

    public setBirthDay(birthday: Date): void {
        this.birthday = birthday;
    }

    public setAddress(address: Address): void {
        this.address = address;
    }

    public getFirstName(): string {
        return this.firstName;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public getBirthDay(): Date {
        return this.birthday;
    }

    public getAddress(): Address {
        return this.address;
    }
};

export default User;
