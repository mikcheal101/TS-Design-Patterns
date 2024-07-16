import Iterator from "./iterator";

enum ThemeColorEnum {
    RED,
    ORANGE,
    BLACK,
    WHITE,
    __LENGTH
};

class ThemeColor {

    public static getIterator(): Iterator<ThemeColorEnum> {
        return new this.ThemeColorIterator();
    }

    private static ThemeColorIterator  = class implements Iterator<ThemeColorEnum> {

        private _position: number;
    
        constructor() {
            this._position = 0;
        }
    
        public next(): ThemeColorEnum {
            return ThemeColorEnum[ThemeColorEnum[this._position++]];
        }
    
        public hasNext(): boolean {
            return this._position < ThemeColorEnum.__LENGTH;
        }
    
    };

};

export default ThemeColor;