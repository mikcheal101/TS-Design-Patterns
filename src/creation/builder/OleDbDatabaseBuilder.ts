import Database from "./Database";
import IDatabaseBuilder from "./IDatabaseBuilder";
import OleDbDatabase from "./OleDbDatabase";

class OleDbDatabaseBuilder implements IDatabaseBuilder {
    database: Database;

    constructor() {
        this.database = new OleDbDatabase();
    };
    
    BuildCommand() {
        this.database.command = "oledb-command";
    }

    BuildConnection() {
        this.database.connection = "oledb-connection";
    }

    SetSettings() {
        /** Anything extra */
    }
};

export default OleDbDatabaseBuilder;