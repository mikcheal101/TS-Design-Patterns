class LazyRegistryWithDCL {

    private constructor() {}
    private static INSTANCE: LazyRegistryWithDCL;

    public static getInstance(): LazyRegistryWithDCL {
        if(this.INSTANCE == undefined) {
            new Promise((resolve, reject) => {
                if (this.INSTANCE == undefined) {
                    this.INSTANCE = new LazyRegistryWithDCL();
                }
            });
        }
        return this.INSTANCE;
    }
};

export default LazyRegistryWithDCL;