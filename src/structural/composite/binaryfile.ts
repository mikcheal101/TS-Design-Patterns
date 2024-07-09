import CompositeFile from "./compositefile";

class BinaryFile extends CompositeFile {

    private size: number;

    constructor(name: string, size: number) {
        super(name);
        this.size = size;
    }

    public override ls(): void {
        console.log(`${this.getName()}\t${this.size}`);
    }

    public override addFile(file: CompositeFile): void {
        throw new Error("Leaf node doesn't support add operation");
    }
    
    public override getFiles(): CompositeFile[] {
        throw new Error("Leaf node doesn't support get operation");
    }
    
    public override removeFile(file: CompositeFile): boolean {
        throw new Error("Leaf node doesn't support remove operation");
    }

};

export default BinaryFile;