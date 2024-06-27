// This is the implementor
abstract class LinkedList<T> extends Array {
    constructor() {
        super();
    }
    
    public abstract addFirst(element: T): void;
    public abstract removeFirst(): T;
    public abstract addLast(element: T): void;
    public abstract removeLast(): T;
    public abstract getSize(): number;
};

export default LinkedList;