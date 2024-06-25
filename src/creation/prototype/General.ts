import GameUnit from "./GameUnit";

class General extends GameUnit {

    private state:string = "idle";

    public boostMorale(): void {
        this.state = "MoralBoost";
    }

    public override toString():string {
        return `General ${this.state} @ ${this.getPosition()}.`;
    }

    public override clone(): GameUnit {
        throw Error("Generals are unique");
    }

    protected override reset(): void {
        throw Error("Reset not supported!");
    }
};

export default General;