import Email from "./email";
import Stationary from "./stationary";
import Template from "./template";

class EmailBuilder {
    
    public withTemplate(template: Template): EmailBuilder {
        return this;
    }

    public withStationary(stationary: Stationary): EmailBuilder {
        return this;
    }

    public forObject(object: Object): EmailBuilder {
        return this;
    }

    public build(): Email {
        return null;
    }

    public getEmail(): Email {
        return null;
    }
};

export default EmailBuilder;