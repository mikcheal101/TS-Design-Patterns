import GoogleCloudStorage from "./googlecloud.storage";
import GoogleComputeEngineInstance from "./googlecomputeengine.instance";
import Instance, { Capacity } from "./instance";
import IResourceFactory from "./iresource.factory";
import Storage from "./storage";

class GoogleCloudResourceFactory implements IResourceFactory {

    public createInstance(capacity: Capacity): Instance {
        return new GoogleComputeEngineInstance(capacity);
    }

    public createStorage(inMb: number): Storage {
        return new GoogleCloudStorage(inMb);
    }

};

export default GoogleCloudResourceFactory;