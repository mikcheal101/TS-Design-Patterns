import ErrorMessageFactory from "./errormessagefactory";
import ErrorType from "./errortype";
import SystemErrorMessage from "./systemerrormessage";

(function main() {

    const msg1: SystemErrorMessage = ErrorMessageFactory.getInstance().getError(ErrorType.GenericSystemError);
    console.log(msg1.getText("4056")); 

    const msg2 = ErrorMessageFactory.getInstance().getUserBannedMessage("1202");
    console.log(msg2.getText(null));

})();


