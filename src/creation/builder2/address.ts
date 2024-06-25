class Address {
    houseNumber: string;
    street: string;
    city: string;
    zipcode: string;
    state: string;

    public getHouseNumber(): string {
        return this.houseNumber;
    }

    public setHouseNumber(houseNumber: string): void {
        this.houseNumber = houseNumber;
    }

    public getStreet(): string {
        return this.street;
    }

    public setStreet(street: string): void {
        this.street = street;
    }

    public getCity(): string {
        return this.city;
    }

    public setCity(city: string): void {
        this.city = city;
    }

    public getZipcode(): string {
        return this.zipcode;
    }

    public setZipcode(zipcode: string) {
        this.zipcode = zipcode;
    }

    public getState(): string {
        return this.state;
    }

    public setState(state: string): void {
        this.state = state;
    }
};

export default Address;