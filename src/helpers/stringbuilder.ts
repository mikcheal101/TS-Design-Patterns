class StringBuilder extends Object {
    private _text: string;

    constructor(initText: string = "") {
        super();
        this._text = initText;
    }

    public append(text: string): StringBuilder {
        this._text = `${this._text}${text}`;
        return this;
    }

    public override toString(): string {
        return this._text;
    }
};

export default StringBuilder;