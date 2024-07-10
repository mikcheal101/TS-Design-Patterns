import Point2D from "../../helpers/prototype/Point2D";
import Image from "./image";

class BitmapImage extends Image {
    private location: Point2D;
    private name: string;

    constructor(fileName: string) {
        super();
        console.log(`Loaded from disk: ${fileName}`);
        this.name = fileName;
    }

    public override setLocation(point2D: Point2D): void {
        this.location = point2D;
    }

    public override getLocation(): Point2D {
        return this.location;
    }

    public override render(): void {
        console.log(`Rendered ${this.name}`);
    }
};

export default BitmapImage;