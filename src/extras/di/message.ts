

class Message {

    private _message: string;
    private _timeStamp: Date;

    constructor(msg: string) {
        this._message = msg;
        this._timeStamp = new Date();
    }

    public getMessage(): string {
        return this._message;
    }

    public getTimeStamp(): Date {
        return this._timeStamp;
    }

};

export default Message;