import OrderObserver from "./order.observer";

class Order extends Object {

    private _id: string;
    private _count: number; // number of items
    private _itemCost: number; // cost of items
    private _discount: number;
    private _shippingCost: number;

    private _orderObservers: Array<OrderObserver> = [];

    constructor(id: string) {
        super();
        this._count = 0;
        this._itemCost = 0;
        this._shippingCost = 0;
        this._discount = 0;
        this._id = id;
    }

    public addItem(price: number): void {
        this._itemCost += price;
        this._count++;
        this._orderObservers.forEach((observer: OrderObserver) => observer.updated(this));
    }

    public setDiscount(discount: number): void {
        this._discount = discount;
    }

    public setShippingCost(shippingCost: number): void {
        this._shippingCost = shippingCost;
    }

    public getDiscount(): number {
        return this._discount;
    }

    public getShippingCost(): number {
        return this._shippingCost;
    }

    public getCount(): number {
        return this._count;
    }

    public getItemCost(): number {
        return this._itemCost;
    }

    public getTotal(): number {
        return this._itemCost - this._discount + this._shippingCost;
    }

    public attach(observer: OrderObserver): void {
        this._orderObservers.push(observer);
    }

    public detach (observer: OrderObserver): void {
        this._orderObservers = this._orderObservers.filter((head: OrderObserver) => head != observer);
    }

    public override toString(): string {
        return `Order [id= ${this._id}, itemCost=${this._itemCost}, count=${this._count}, discount=${this._discount}, shippingCost=${this._shippingCost}]`;
    }
};

export default Order;