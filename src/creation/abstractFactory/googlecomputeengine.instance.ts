import GoogleCloudStorage from "./googlecloud.storage";
import Instance, { Capacity } from "./instance";

class GoogleComputeEngineInstance implements Instance {

    constructor(capacity: Capacity) {
        // Map capacity to gcp instance types. 
        console.log("Created Google Compute Engine instance");
    }

    public start(): void {
        console.log("Compute engine instance started!");
    }
    
    public stop(): void {
        console.log("Compute engine instance stopped!");
    }
    
    public attachStorage(storage: GoogleCloudStorage): void {
        console.log(`Attached ${storage} to Compute engine instance!`);
    }

    public toString(): string {
        return "Compute engine instance";
    }
};

export default GoogleComputeEngineInstance;