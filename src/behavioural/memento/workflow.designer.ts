import Step from "./step";
import Workflow from "./workflow";

export class Momento {

    private _steps: Array<string>;
    private _name: string;

    constructor(steps: Array<string> = [], name: string = "") {
        this._name = name;
        this._steps = steps;
    }

    public getName(): string {
        return this._name;
    }

    public getSteps(): Array<string> {
        return this._steps;
    }

    public isEmpty(): boolean {
        return ((this.getSteps() == null || this.getSteps().length < 1) && this.getName() == null);
    }
};

class WorkflowDesigner {

    private _workflow: Workflow;

    public createWorkflow(name: string): void {
        this._workflow = new Workflow(name);
    }

    public getWorkflow(): Workflow {
        return this._workflow;
    }

    public getMomento(): Momento {
        if (this._workflow == null || this._workflow == undefined) {
            return new Momento();
        }
        return new Momento(this._workflow.getSteps(), this._workflow.getName());
    }

    public setMomento(momento: Momento): void {
        if (momento.isEmpty()) {
            this._workflow = null;
        } else {
            this._workflow = new Workflow(momento.getName(), momento.getSteps());
        }
    }

    public addStep(step: string): void {
        this._workflow.addStep(step);
    }

    public removeStep(step: string): void {
        this._workflow.removeStep(step);
    }

    public print(): void {
        console.log(this._workflow.toString());
    }
};

export default WorkflowDesigner;