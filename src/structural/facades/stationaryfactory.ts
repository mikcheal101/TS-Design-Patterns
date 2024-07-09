import SallahStationary from "./sallah.stationry";
import Stationary from "./stationary";

class StationaryFactory { 
    public static createStationary(): Stationary {
        return new SallahStationary();
    }
};

export default StationaryFactory;