import Database from "./Database";
import IDatabaseBuilder from "./IDatabaseBuilder";
import MongoDbDatabase from "./MongoDbDatabase";

class MongoDbDatabaseBuilder implements IDatabaseBuilder {
    database: Database;

    constructor () {
        this.database = new MongoDbDatabase();
    }

    BuildCommand(): void {
        this.database.connection = "mongodb-connection";
    }

    BuildConnection(): void {
        this.database.command = "mongodb-command"
    }

    SetSettings(): void {
        /** Anything extra can come in here */
    }
};

export default MongoDbDatabaseBuilder;