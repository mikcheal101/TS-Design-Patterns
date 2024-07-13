import AddMemberCommand from "./addmemeber.command";
import Command from "./command";
import EWSService from "./ews.service";
import MailTaskRunner from "./mailtaskrunner";


(function main() {
    
    const service: EWSService = new EWSService();
    
    const c1: Command = new AddMemberCommand("ada@mail.cz", "spam", service);
    MailTaskRunner.getInstance().addCommand(c1);

    const c2: Command = new AddMemberCommand("gabriel@mail.cz", "spam", service);
    MailTaskRunner.getInstance().addCommand(c2);

    // mimicking Thread.sleep(3000);
    setTimeout(() => {}, 3000);
})();





