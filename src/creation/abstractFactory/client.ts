import Instance, { Capacity } from "./instance";
import IResourceFactory from "./iresource.factory";
import Storage from "./storage";

class Client {
    private factory: IResourceFactory;

    constructor(factory: IResourceFactory) {
        this.factory = factory;
    }

    public createServer(capacity: Capacity, storageInMib: number): Instance {
        let instance: Instance = this.factory.createInstance(capacity);
        let storage: Storage = this.factory.createStorage(storageInMib);
        instance.attachStorage(storage);
        return instance;
    }
};

export default Client;