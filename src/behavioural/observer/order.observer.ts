import Order from "./order";

abstract class OrderObserver {
    abstract updated(order: Order): void;
};

export default OrderObserver;