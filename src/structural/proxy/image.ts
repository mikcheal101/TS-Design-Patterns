import Point2D from "../../helpers/prototype/Point2D";

abstract class Image {
    public exits(): boolean {
        return (this != undefined && this != null);
    }
    public abstract setLocation(point2D: Point2D): void;
    public abstract getLocation(): Point2D;
    public abstract render(): void;
};

export default Image;