import Email from "./email";
import Mailer from "./mailer";
import Order from "./order";
import Stationary from "./stationary";
import StationaryFactory from "./stationaryfactory";
import TemplateFactory from "./templatefactory";
import TemplateType from "./templatetype";

class EmailFacade {

    public static sendOrderEmail(order: Order): boolean {
        let template: TemplateFactory = TemplateFactory.createTemplateFor(TemplateType.Email);
        let stationary: Stationary = StationaryFactory.createStationary();
        let email: Email = Email.getBuilder()
                            .withTemplate(template)
                            .withStationary(stationary)
                            .forObject(order)
                            .build();
        let mailer: Mailer = Mailer.getMailer();
        return mailer.send();
    }
};

export default EmailFacade;