abstract class PointD {
    protected a: number;
    public ZERO: PointD;

    public getA(): number {
        return this.a;
    }

    public normalize(): PointD {
        return this;
    }

    public abstract multiply(distance: number): PointD;

    public abstract add(move: PointD): PointD;

    public abstract toString(): string;
};

export default PointD;