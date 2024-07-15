import TextField from "./textfield";
import IUIControl from "./iuicontrol";
import UIMediator from "./uimediator";

class TextBox extends TextField implements IUIControl {

    private mediator: UIMediator;

    private mediatedUpdate: boolean = false;

    constructor(mediator: UIMediator) {
        super();

        this.mediator = mediator;
        this.setText("TextBox");

        this.mediator.register(this);

        setInterval(() => {

            if (!this.mediatedUpdate) {
                this.mediator.valueChanged(this);
            }

        }, randomizing(1000, 99)); // random between 99 - 1000.
    }

    public controlChanged(control: IUIControl): void {
        this.mediatedUpdate = true;
        this.setText(control.getControlValue());
        this.mediatedUpdate = false;
    }

    public getControlValue(): string {
        return this.getText();
    }

    public getControlName(): string {
        return `TextBox`;
    }

};

export default TextBox;