import CompositeFile from "./compositefile";

/**
 * This is the composite class in the composite design pattern.
 */
class Directory extends CompositeFile {
    private children: Array<CompositeFile> = [];

    constructor(name: string) {
        super(name);
    }

    public override ls(): void {
        console.log(this.getName());
        this.children.forEach((child: CompositeFile) => child.ls());
    }
    
    public override addFile(file: CompositeFile): void {
        this.children.push(file);
    }
    
    public override getFiles(): CompositeFile[] {
        return this.children;
    }
    
    public override removeFile(file: CompositeFile): boolean {
        const index = this.children.indexOf(file);

        if (index !== 1) {
            this.children.splice(index, 1);
            return true;
        }

        return false;
    }
    
};

export default Directory;