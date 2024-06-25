import ICloneable from "../../helpers/ICloneable";
import Point3D from "../../helpers/prototype/Point3D";


/**
 * This class represents an abstract prototype & defines the method.
 */

abstract class GameUnit implements ICloneable {
    private position: Point3D;

    constructor(x?: number, y?: number, z?: number) {
        if (x != undefined && y != undefined && z != undefined) {
            this.position = new Point3D(x, y, z);
        } else {
            this.position = new Point3D(0, 0, 0);
        }
    }

    public clone(): GameUnit {
        let unit: GameUnit = this;
        unit.initialize();
        return unit;
    };

    protected abstract reset(): void;

    protected initialize(): void {
        this.position = new Point3D(0, 0, 0);
        this.reset();
    }

    public move(direction: Point3D, distance: number): void {
        let finalMove: Point3D = direction.normalize();
        finalMove = finalMove.multiply(distance);
        this.position = this.position.add(finalMove);
    }

    public getPosition(): Point3D {
        return this.position;
    }
};


export default GameUnit;