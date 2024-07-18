import Order from "./order";
import OrderObserver from "./order.observer";

class PriceObserver extends OrderObserver {

    public override updated(order: Order): void {
        const total: number = order.getItemCost();
        if (total >= 500) {
            order.setDiscount(20);
        }
        else if (total >= 200) {
            order.setDiscount(10);
        }
    }

};

export default PriceObserver;