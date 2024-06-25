import Ec2Instance from "./ec2.instance";
import Instance, { Capacity } from "./instance";
import IResourceFactory from "./iresource.factory";
import S3Storage from "./s3.storage";
import Storage from "./storage";

class AwsResourceFactory implements IResourceFactory {
    
    public createInstance(capacity: Capacity): Instance {
        return new Ec2Instance(capacity);
    }

    public createStorage(inMb: number): Storage {
        return new S3Storage(inMb);
    }
};

export default AwsResourceFactory;