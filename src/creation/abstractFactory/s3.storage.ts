import Storage from "./storage";

class S3Storage extends Storage {

    constructor(capacityMib: number) {
        super();
        // use aws s3 api
        console.log(`Allocated ${capacityMib} on S3.`);
    }

    public override getId(): string {
        return "S31";
    }

    public override toString(): string {
        return "S3 Storage";
    }
};

export default S3Storage;