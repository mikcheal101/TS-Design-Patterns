class Mailer {

    private static instance = null;

    private constructor() {}

    public static getMailer(): Mailer {
        if (this.instance == null) {
            this.instance = new Mailer();
        }

        return this.instance;
    }

    public send(): boolean {
        return false;
    }
};

export default Mailer;