import PointD from "./pointD";

class Point2D extends PointD {
    protected b: number;

    constructor(x: number, y: number) {
        super();
        this.ZERO = new Point2D(0, 0);
        this.a = x;
        this.b = y;
    }

    public getB(): number {
        return this.b;
    }

    public override normalize(): Point2D {
        return this;
    }

    public override multiply(distance: number): Point2D {
        this.a *= distance;
        this.b *= distance;
        return this;
    }

    public override add(move: Point2D): Point2D {
        this.a += move.getA();
        this.b += move.getB();
        return this;
    }

    public toString(): string {
        return `[x = ${this.a}, y = ${this.b}]`;
    }
};

export default Point2D;