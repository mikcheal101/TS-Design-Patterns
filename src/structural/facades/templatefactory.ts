import TemplateType from "./templatetype";

abstract class TemplateFactory {
    public abstract format(): string;
    
    public static createTemplateFor(type: TemplateType): TemplateFactory {
        return null;
    }
};

export default TemplateFactory;