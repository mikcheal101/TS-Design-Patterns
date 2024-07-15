import UIControl from "./iuicontrol";

class UIMediator {

    protected _coleagues: Array<UIControl> = [];

    public register(control: UIControl): void {
        this._coleagues.push(control);
    }
    
    public valueChanged(control: UIControl): void {
       this._coleagues.filter((uiControl: UIControl) => uiControl != control).forEach((uiControl: UIControl) => uiControl.controlChanged(control));
    }
};

export default UIMediator;