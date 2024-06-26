import AsyncLock from "async-lock";

class ExceptionHandler {

    public static _lock: AsyncLock = new AsyncLock();

    private static _instance: ExceptionHandler;

    private constructor() { }

    public static async getInstance(): Promise<ExceptionHandler> {
        // mutex l

        const executeFn = (_instance) => {
            console.log("[+] checking instance !");
            if (null == this._instance) {

                console.log("[+] setting instance !");
                this._instance = new ExceptionHandler();
            }
        };

        const cbFn = (error, ret) => {
            console.log(`[-] in err, ret space!: ${error} => ${ret}`);
        };

        await this._lock.acquire("_instance", executeFn, cbFn);

        return this._instance;
    }

    public WriteExceptionLog(exception: string): void {
        console.log(`[+] Executing: writeExceptionLog Function \n[*] error: ${exception}`);
    }
};

export default ExceptionHandler;