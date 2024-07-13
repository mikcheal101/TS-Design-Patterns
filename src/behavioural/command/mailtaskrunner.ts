import AsyncLock from "../../helpers/async-lock";
import Command from "./command";

class MailTaskRunner {
    private _pendingCommands: Array<Command>;
    private _stop: boolean;
    private static readonly _RUNNER: MailTaskRunner = new MailTaskRunner();

    private constructor() {
        this._pendingCommands = [];
    }

    public static getInstance(): MailTaskRunner {
        return this._RUNNER;
    }

    public async addCommand(cmd: Command): Promise<void> {
        const lock: AsyncLock = new AsyncLock();
        await lock.awaitPromise();
        
        lock.enable();
        this._pendingCommands.push(cmd);
        lock.disable();
    };

    public shutdown(): void {
        this._stop = true;
    }

    public async run(): Promise<void> {
        const lock: AsyncLock = new AsyncLock();

        // enable lock
        lock.enable();
        await lock.awaitPromise();

        while(true) {
            let cmd: Command = null;
            lock.enable();
            if (this._pendingCommands.length == 0) {

                // delay for 3secs
                setTimeout(() => {}, 3000);
            } else {
                cmd = this._pendingCommands.pop();
            }

            if (cmd == null) {
                return ;
            }

            cmd.execute();
            lock.disable();
        }
    }

};


export default MailTaskRunner;