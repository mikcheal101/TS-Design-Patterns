class LazyRegistryIODH {

    private constructor() {
        console.log("Inside LazyRegistryIODH constructor!");
    }

    private static RegistryHolder = class {
        static INSTANCE:LazyRegistryIODH = new LazyRegistryIODH(); 
    }

    public static getInstance(): LazyRegistryIODH {
        return this.RegistryHolder.INSTANCE;
    }
};

export default LazyRegistryIODH;