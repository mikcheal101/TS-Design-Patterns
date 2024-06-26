

class EagerRegistry {

    private constructor() {}

    private static INSTANCE: EagerRegistry = new EagerRegistry();

    public static getInstance(): EagerRegistry {
        return this.INSTANCE;
    }
};

export default EagerRegistry;