import AbstractWorkflowCommand from "./abstractworkflow.command";
import WorkflowDesigner from "./workflow.designer";

class CreateCommand extends AbstractWorkflowCommand {

    private _name: string;

    constructor(designer: WorkflowDesigner, name: string) {
        super(designer);
        this._name = name;
    }

    public override execute(): void {
        this._momento = this._receiver.getMomento();
        this._receiver.createWorkflow(this._name);
    }


};

export default CreateCommand;