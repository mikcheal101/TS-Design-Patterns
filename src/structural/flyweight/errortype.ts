// this serves as key for getting flyweight instance 
enum ErrorType {
    GenericSystemError = 0,
    PageNotFoundError,
    ServerError,
    UserError,
    SystemError
};

export default ErrorType;