
class UserWebDTO extends UserDTO {
    private name: string;
    private address: string;
    private age: number;

    constructor(name: string, address: string, age: number) {
        super();
        this.address = address;
        this.age = age;
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public getAddress(): string {
        return this.address;
    }

    public getAge(): number {
        return this.age;
    }

}