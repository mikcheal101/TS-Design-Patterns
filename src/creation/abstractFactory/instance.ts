import Storage from "./storage";

export enum Capacity { micro, small, large };

interface Instance {
    start(): void;
    stop(): void;
    attachStorage(storage: Storage): void;
};

export default Instance;