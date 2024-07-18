import Order from "./order";
import PriceObserver from "./price.observer";

(function main() {
    const order: Order = new Order("500");
    const priceObserver: PriceObserver = new PriceObserver();

    order.attach(priceObserver);
    order.addItem(150); // add an item thats 50 bucks.
    order.addItem(179); // add an item thats 50 bucks.

    console.log(order.toString()); // Order [id= 500, itemCost=329, count=2, discount=10, shippingCost=0]

    return 0;
})();





