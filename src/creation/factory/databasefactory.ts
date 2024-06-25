import Database from "./database";
import DatabaseType from "./databasetype";
import MongoDbDatabase from "./mongodb.database";
import OleDbDatabase from "./oledb.database";

class DatabaseFactory {
    public createDataBase(databaseType: DatabaseType): Database {
        let database: Database;

        switch (databaseType) {
            case DatabaseType.MongoDbDatabase:
                database = new MongoDbDatabase();
                break;

            case DatabaseType.SqlServerDatabase:
            case DatabaseType.OledbDatabase:
            default:
                database = new OleDbDatabase();
                break;
        }

        return database;
    }
};

export default DatabaseFactory;