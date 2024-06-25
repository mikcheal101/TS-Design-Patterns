import Address from "./address";
import IUserDTOBuilder from "./userdto.builder";

class UserWebDTOBuilder implements IUserDTOBuilder {

    /** since userwebdto has just name not f and last naes. */
    private firstName: string;
    private laststName: string;

    public withFirstName(firstName: string): IUserDTOBuilder {
        this.firstName = firstName;
        return this;
    }

    public withLastName(lastName: string): IUserDTOBuilder {
        this.laststName = lastName;
        return this;
    }

    public withBirthday(birthday: Date): IUserDTOBuilder {
        throw new Error("Method not implemented.");
    }

    public withAddress(address: Address): IUserDTOBuilder {
        throw new Error("Method not implemented.");
    }

    public build() {
        throw new Error("Method not implemented.");
    }

    public getUserDTO() {
        throw new Error("Method not implemented.");
    }

};

export default UserWebDTOBuilder;