import Database from "./Database";

interface IDatabaseBuilder {
    database: Database;

    BuildCommand(): void;
    BuildConnection(): void;
    SetSettings(): void;
};

export default IDatabaseBuilder;