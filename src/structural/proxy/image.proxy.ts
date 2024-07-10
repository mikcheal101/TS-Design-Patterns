import Point2D from "../../helpers/prototype/Point2D";
import BitmapImage from "./bitmapimage";
import Image from "./image";

class ImageProxy extends Image {

    private realImage: BitmapImage;
    private name: string;
    private location: Point2D;

    constructor(name: string) {
        super();
        this.name = name;
    }

    public override setLocation(point2D: Point2D): void {
        if (this.realImage.exits()) {
            this.realImage.setLocation(point2D);
        }  else {
            this.location = point2D;
        }
    }
    
    public override getLocation(): Point2D {
        if(this.realImage.exits()) {
            return this.realImage.getLocation();
        } else {
            return this.location;
        }
    }
    
    public override render(): void {
        if (!this.realImage.exits()) {
            this.realImage = new BitmapImage(this.name);
            if (this.location != null && this.location != undefined) {
                this.realImage.setLocation(this.location);
            }
        }
 
        this.realImage.render();
    }

};

export default ImageProxy;