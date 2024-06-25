import LandUnit from "./LandUnit";
import NavalUnit from "./NavalUnit";

interface IGameUnitFactory {
    createLandUnit(): LandUnit;
    createNavalUnit(): NavalUnit;
};

export default IGameUnitFactory;