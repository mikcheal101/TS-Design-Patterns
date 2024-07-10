import Point2D from "./Point2D";

class Point3D extends Point2D {
    private c: number;
    public static ZERO: Point3D = new Point3D(0, 0, 0);

    constructor(x: number, y: number, z: number) {
        super(x, y);
        this.c = z;
    }

    public getC(): number {
        return this.c;
    }

    public override multiply(distance: number): Point3D {
        super.multiply(distance);
        this.c *= distance;
        return this;
    }

    public override add(move: Point3D): Point3D {
        super.add(move);
        this.c += move.getC();
        return this;
    }

    public override toString(): string {
        return `[x = ${this.a}, y = ${this.b}, z = ${this.c}]`;
    }


};

export default Point3D;