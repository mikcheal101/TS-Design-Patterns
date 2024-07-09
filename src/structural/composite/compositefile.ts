/**
 * The component base class for composite design.
 * THis class defines the operations applicable to both composite and leaf.
 */
abstract class CompositeFile {

    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public abstract ls(): void;
    public abstract addFile(file: CompositeFile): void;
    public abstract getFiles(): CompositeFile[];
    public abstract removeFile(file: CompositeFile): boolean;
};

export default CompositeFile;