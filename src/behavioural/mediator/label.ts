import IUIControl from "./iuicontrol";
import TextField from "./textfield";
import UIMediator from "./uimediator";

class Label extends TextField implements IUIControl {

    private _uiModerator: UIMediator;
    private _mediatedUpdate: boolean;

    constructor(moderator: UIMediator) {
        super();
        this.setText(`Label`);
        this._mediatedUpdate = false;
        this._uiModerator = moderator;
        this._uiModerator.register(this);

        setInterval(() => {

            if (!this._mediatedUpdate) {
                this._uiModerator.valueChanged(this);
            }

        }, randomizing(1000, 143)); // random between 143 - 1000.
    }

    controlChanged(control: IUIControl): void {
        this._mediatedUpdate = false;
        this.setText(control.getControlValue());
        this._mediatedUpdate = true;
    }
    
    getControlValue(): string {
        return this.getText();
    }
    
    getControlName(): string {
        return this.getText();
    }
}; 

export default Label;