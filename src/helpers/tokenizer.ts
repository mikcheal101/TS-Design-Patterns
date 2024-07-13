
abstract class Tokenizer<T> {

    protected _object: T;
    protected _tokens: Array<T>;

    constructor(object: T) {
        this._object = object;
        this.tokenize();
    }

    protected abstract tokenize(): void;
    
    public  hasMoreTokens(): boolean {
        return this._tokens.length > 0;
    }

    public nextToken(): T {
        let _nextToken: T = null;

        try {
            _nextToken = this._tokens.pop();
        } catch {}

        return _nextToken;
    }
    
};

export default Tokenizer;