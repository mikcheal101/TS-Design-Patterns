interface IUIControl {
    controlChanged(control: IUIControl): void;
    getControlValue(): string;
    getControlName(): string;
};

export default IUIControl;