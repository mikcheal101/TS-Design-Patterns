import Tokenizer from "./tokenizer";

class StringTokenizer extends Tokenizer<string> {
    
    protected override tokenize(): void {
        this._tokens = (this._object.match(/\w+/g)).map((item: string) => item.toLowerCase().trim());
    }

};

export default StringTokenizer;