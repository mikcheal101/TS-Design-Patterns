import WorkflowCommand from "./workflow.command";
import WorkflowDesigner, { Momento } from "./workflow.designer";

abstract class AbstractWorkflowCommand extends WorkflowCommand {
    protected _momento: Momento;
    protected _receiver: WorkflowDesigner;

    constructor(designer: WorkflowDesigner) {
        super();
        this._receiver = designer;
    }

    public undo(): void {
        this._receiver.setMomento(this._momento);
    }
};

export default AbstractWorkflowCommand;