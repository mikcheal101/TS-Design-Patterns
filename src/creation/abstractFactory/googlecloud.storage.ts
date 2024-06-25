import Storage from "./storage";

class GoogleCloudStorage extends Storage {

    constructor(capacityMib: number) {
        super();
        console.log(`Allocated ${capacityMib} on Google Cloud Storage.`);
    }
    public override getId(): string {
        return "gcpcs1";
    }

    public override toString() {
        return "Google cloud storage";
    }
};

export default GoogleCloudStorage;