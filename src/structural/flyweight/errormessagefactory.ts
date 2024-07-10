import ErrorType from "./errortype";
import SystemErrorMessage from "./systemerrormessage";
import UserBannedErrorMessage from "./userbannederrormessage";

class ErrorMessageFactory {
    private static readonly FACTORY: ErrorMessageFactory = new ErrorMessageFactory();

    public static getInstance(): ErrorMessageFactory {
        return this.FACTORY;
    }

    private errorMessages: Map<ErrorType, SystemErrorMessage> = new Map<ErrorType, SystemErrorMessage>();
    private constructor() {
        this.errorMessages.set(ErrorType.GenericSystemError, new SystemErrorMessage("A generic error of type $errorCode occurred. Please refer to:]\n", "https://google.com/q="));
        this.errorMessages.set(ErrorType.PageNotFoundError, new SystemErrorMessage("Page not found. An error of type $errorCode occurred. Please refer to:]\n", "https://google.com/q="));
    }

    public getError(errorType: ErrorType): SystemErrorMessage {
        return this.errorMessages.get(errorType);
    }

    public getUserBannedMessage(caseId: string): UserBannedErrorMessage {
        return new UserBannedErrorMessage(caseId);
    }
};

export default ErrorMessageFactory;