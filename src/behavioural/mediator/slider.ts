import IUIControl from "./iuicontrol";
import UIMediator from "./uimediator";
import UISlider from "./uislider";

class Slider extends UISlider implements IUIControl {
    
    private uiMediator: UIMediator;
    private mediatedUpdate: boolean = false;

    constructor(mediator: UIMediator) {
        super();
        this.uiMediator = mediator;
        this.setMinimum(0);
        this.setMaximum(300);
        this.setBlockIncrement(2);
        this.uiMediator.register(this);

        setInterval(() => {

            if (!this.mediatedUpdate) {
                this.uiMediator.valueChanged(this);
            }

        }, randomizing(1000, 99)); // random between 99 - 1000.
    }

    controlChanged(control: IUIControl): void {
        this.mediatedUpdate = true;
        this.setValue(Number(control.getControlValue()));
        this.mediatedUpdate = false;
    }

    getControlValue(): string {
        return `${this.getValue()}`;
    }

    getControlName(): string {
        return `Slider`;
    }

};

export default Slider;