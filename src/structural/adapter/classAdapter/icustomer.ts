/***
 * Target interface required by a client code.
 */
interface ICustomer {
    getName(): string;
    getDesignation(): string;
    getAddress(): string;
};

export default ICustomer;