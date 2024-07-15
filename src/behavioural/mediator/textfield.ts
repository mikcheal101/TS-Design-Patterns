abstract class TextField {
    private _text: string;

    public getText(): string {
        return this._text;
    }

    public setText(text: string): void {
        this._text = text;
    }
};

export default TextField;