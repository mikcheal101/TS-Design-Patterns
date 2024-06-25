import Galley from "./Galley";
import IGameUnitFactory from "./IGameUnitFactory";
import Swordsman from "./Swordsman";

class MedievalGameUnitFactory implements IGameUnitFactory {
    
    createLandUnit(): Swordsman {
        throw new Error("Method not implemented.");
    }
    createNavalUnit(): Galley {
        throw new Error("Method not implemented.");
    }
};

export default MedievalGameUnitFactory;