import GameUnit from "./GameUnit";

class Swordsman extends GameUnit {

    private state: string = "idle";

    public attack(): void {
        this.state = "attacking";
    }

    protected override reset(): void {
        this.state = "idle";
    }

    public override toString(): string {
        return `Swordsman ${this.state} @ ${this.getPosition().toString()}` ;
    }
};

export default Swordsman;