import Database from "./Database";

abstract class Director {
    abstract Build(): Database;
};

export default Director;