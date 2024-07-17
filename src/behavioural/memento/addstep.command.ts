import AbstractWorkflowCommand from "./abstractworkflow.command";
import WorkflowDesigner from "./workflow.designer";

class AddStepCommand extends AbstractWorkflowCommand {

    private _step: string;

    constructor(designer: WorkflowDesigner, step: string) {
        super(designer);
        this._step = step;
    }

    public override execute(): void {
        this._momento = this._receiver.getMomento();
        this._receiver.addStep(this._step);
    }


};

export default AddStepCommand;