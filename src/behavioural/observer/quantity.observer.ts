import Order from "./order";
import OrderObserver from "./order.observer";

class QuantityObserver extends OrderObserver {

    public override updated(order: Order): void {
        const count: number = order.getCount();

        if (count <= 5) {
            order.setShippingCost(10);
        } else {
            order.setShippingCost(10 + (count - 5) * 1.5);
        }
    }

};

export default QuantityObserver;