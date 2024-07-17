abstract class WorkflowCommand {
    public abstract undo(): void;
    public abstract execute(): void;
};

export default WorkflowCommand;