import EmailBuilder from "./emailbuilder";

class Email {

    public static getBuilder(): EmailBuilder {
        return new EmailBuilder();
    }
};

export default Email;