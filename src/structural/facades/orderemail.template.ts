import Template from "./templatefactory";

class OrderEmailTemplate extends Template {

    public override format(): string {
        return "TEMPLATE";
    }
};

export default OrderEmailTemplate;