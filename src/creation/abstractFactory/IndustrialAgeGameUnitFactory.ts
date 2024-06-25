import IGameUnitFactory from "./IGameUnitFactory";
import Ironclad from "./Ironclad";
import Rifleman from "./Rifleman";

class IndustrialAgeGameUnitFactory implements IGameUnitFactory {

    createLandUnit(): Rifleman {
        throw new Error("Method not implemented.");
    }

    createNavalUnit(): Ironclad {
        throw new Error("Method not implemented.");
    }
};

export default IndustrialAgeGameUnitFactory;