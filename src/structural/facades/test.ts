import Email from "./email";
import EmailFacade from "./emailfacade";
import Mailer from "./mailer";
import Order from "./order";
import Stationary from "./stationary";
import StationaryFactory from "./stationaryfactory";
import TemplateFactory from "./templatefactory";
import TemplateType from "./templatetype";

const sendOrderEmailWithoutFacade = (order: Order): boolean => {
    let template: TemplateFactory = TemplateFactory.createTemplateFor(TemplateType.Email);
    let stationary: Stationary = StationaryFactory.createStationary();
    let email: Email = Email.getBuilder()
                        .withTemplate(template)
                        .withStationary(stationary)
                        .forObject(order)
                        .build();
    let mailer: Mailer = Mailer.getMailer();
    return mailer.send();
};

(function main() {

    let order: Order = new Order("101", 99.99);
    let result: boolean = sendOrderEmailWithoutFacade(order);
    console.log(`Order Email ${ result ? "Sent!" : "Not Sent...!" }`);
    
    result = EmailFacade.sendOrderEmail(order);
    console.log(`Order Email ${ result ? "Sent!" : "Not Sent...!" }`);

})();


