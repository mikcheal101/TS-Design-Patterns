import Instance, { Capacity } from "./instance";
import Storage from "./storage";

interface IResourceFactory {
    createInstance(capacity: Capacity): Instance;
    createStorage(inMb: number): Storage;
};

export default IResourceFactory;