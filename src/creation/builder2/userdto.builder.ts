import Address from "./address";

interface IUserDTOBuilder {
    withFirstName(firstName: string): IUserDTOBuilder;
    withLastName(lastName: string): IUserDTOBuilder;
    withBirthday(birthday: Date): IUserDTOBuilder;
    withAddress(address: Address): IUserDTOBuilder;
    build(): UserDTO;

    // optional
    getUserDTO(): UserDTO;
};

export default IUserDTOBuilder;