import StringBuilder from "../../helpers/stringbuilder";

class Workflow extends Object {
    private _steps: Array<string>;
    private _name: string;

    constructor(name: string, steps: Array<string> = []) {
        super();
        this._name = name;
        this._steps = steps;
    }

    public getSteps(): Array<string> {
        return this._steps;
    }

    public addStep(step: string): boolean {
        try {
            this._steps.push(step);
        } catch {
            return false;
        }
        return true;
    }

    public removeStep(step: string): boolean {
        try {
            const index = this._steps.findIndex((_step: string) => _step == step);
            this._steps.splice(index, 1);
        } catch {
            return false;
        } return true;
    }

    public getName(): string {
        return this._name;
    }

    public override toString(): string {
        const stringBuilder: StringBuilder = new StringBuilder(`Workflow [name := `);
        stringBuilder.append(this._name).append(`]\nBegin -> `);
        this._steps.forEach((step: string, _index: number) => {
            stringBuilder.append(step.toString());
            stringBuilder.append((_index < this._steps.length - 1) ? ` -> ` : ` -> END `);
        });

        return stringBuilder.toString();
    }
};

export default Workflow;