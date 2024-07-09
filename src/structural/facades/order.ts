class Order {

    private name: string;
    private amount: number;

    constructor(orderName: string, orderAmount: number) {
        this.name = orderName;
        this.amount = orderAmount;
    }
};

export default Order;