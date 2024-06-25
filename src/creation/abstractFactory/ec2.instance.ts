import Instance, { Capacity } from "./instance";
import S3Storage from "./s3.storage";

// Represents a concrete product on a family "Amazon web services".
class Ec2Instance implements Instance {

    constructor(capacity: Capacity){
        // Map capacity to ec2 instance types. 
        console.log("Created EC2Instance");
    }

    public start(): void {
        console.log("EC2Instance started!");
    }
    
    public stop(): void {
        console.log("EC2Instance stopped!");
    }
    
    public attachStorage(storage: S3Storage): void {
        console.log(`Attached ${storage} to EC2Instance!`);
    }

    public toString(): string {
        return "EC2Instance";
    }
};

export default Ec2Instance;