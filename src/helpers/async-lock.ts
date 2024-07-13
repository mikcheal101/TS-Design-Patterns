class AsyncLock {

    private _promise: Promise<void>;

    constructor() {
        this._promise = Promise.resolve();
    }

    public disable(): void {}

    public enable(): void {
        this._promise = new Promise((resolution) => this.disable = resolution);
    }

    public async awaitPromise(): Promise<void> {
        return await this._promise;
    }
};

export default AsyncLock;