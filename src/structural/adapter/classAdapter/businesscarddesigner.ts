import ICustomer from "./icustomer";

/***
 * Client code that requires ICustomer interface.
 */
class BusinessCardDesigner {

    public designCard(customer: ICustomer): string {
        let card: string = "";
        card += ` ${customer.getName()}`;
        card += `\n ${customer.getDesignation()}`;
        card += `\n ${customer.getAddress()}`;
        return card;
    }
};

export default BusinessCardDesigner;