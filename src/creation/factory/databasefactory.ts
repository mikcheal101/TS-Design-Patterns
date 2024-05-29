import DatabaseType from "./databasetype";
import IDatabase from "./idatabase";
import MongoDbDatabase from "./mongodb.database";
import OleDbDatabase from "./oledb.database";

class DatabaseFactory {
    public createDataBase(databaseType: DatabaseType): IDatabase {
        let database: IDatabase;

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