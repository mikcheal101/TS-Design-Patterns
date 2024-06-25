
class Point3D {
    private a: number;
    private b: number;
    private c: number;
    public static ZERO: Point3D = new Point3D(0, 0, 0);

    constructor(x: number, y: number, z: number) {
        this.a = x;
        this.b = y;
        this.c = z;
    }

    public getA(): number {
        return this.a;
    }

    public getB(): number {
        return this.b;
    }

    public getC(): number {
        return this.c;
    }

    public normalize(): Point3D {
        return this;
    }

    public multiply(distance: number): Point3D {
        this.a *= distance;
        this.b *= distance;
        this.c *= distance;
        return this;
    }

    public add(move: Point3D): Point3D {
        this.a += move.getA();
        this.b += move.getB();
        this.c += move.getC();
        return this;
    }

    public toString(): string {
        return `[x = ${this.a}, y = ${this.b}, z = ${this.c}]`;
    }


};

export default Point3D;