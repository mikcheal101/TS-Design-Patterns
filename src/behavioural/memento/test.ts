import AddStepCommand from "./addstep.command";
import CreateCommand from "./create.command";
import WorkflowCommand from "./workflow.command";
import WorkflowDesigner from "./workflow.designer";

const runCommands = (designer: WorkflowDesigner): Array<WorkflowCommand> => {
    const commands: Array<WorkflowCommand> = [];

    let cmd: WorkflowCommand = new CreateCommand(designer, "Leave Workflow");
    commands.push(cmd);
    cmd.execute();

    cmd = new AddStepCommand(designer, "Create Leave Application");
    commands.push(cmd);
    cmd.execute();

    cmd = new AddStepCommand(designer, "Submit Leave Application");
    commands.push(cmd);
    cmd.execute();

    cmd = new AddStepCommand(designer, "Application Approved");
    commands.push(cmd);
    cmd.execute();

    return commands;
};

const undoLastCommand = (commands: Array<WorkflowCommand>): void => {
    if (commands.length > 0) {
        const lastCommand: WorkflowCommand = commands.pop();
        // commands.reverse();
        lastCommand.undo();
    }
};


(function main() {
    const designer: WorkflowDesigner = new WorkflowDesigner();
    const commands: Array<WorkflowCommand> = runCommands(designer);

    designer.print();
    const lastCmd: WorkflowCommand = commands.pop();
    lastCmd.undo();
    designer.print();
    console.log("****************************************\n");



    // designer.print();
    // undoLastCommand(commands);

    // console.log("****************************************\n");
    // designer.print();
    // undoLastCommand(commands);

    // console.log("****************************************\n");
    // designer.print();
    // undoLastCommand(commands);

    // console.log("****************************************\n");
    // designer.print();
    // undoLastCommand(commands);
    // designer.print();

    return 0;
})();





