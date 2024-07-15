abstract class UISlider {
    private _value: number;
    private _minimum: number;
    private _maximum: number;
    private _blockIncrement: number;
    
    constructor() {
        this._value = 0;
        this._minimum = 0;
        this._maximum = 0;
        this._blockIncrement = 0;
    }
    
    public setValue(value: number): void {
        this._value = value;
    }

    public getValue(): number {
        return this._value;
    }

    public setMinimum(minimum: number): void {
        this._minimum = minimum;
    }

    public getMinimum(): number {
        return this._minimum;
    }

    public setMaximum(maximum: number): void {
        this._maximum = maximum;
    }

    public getMaximum(): number {
        return this._maximum;
    }

    public setBlockIncrement(blockIncrement: number): void {
        this._blockIncrement = blockIncrement;
    }

    public getBlockIncrement(): number {
        return this._blockIncrement;
    }

};

export default UISlider;