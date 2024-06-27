import LinkedList from "./linkedlist";

class ArrayLinkedList<T> extends LinkedList<T> {

    public override addFirst(element: T): void {
        throw new Error("Method not implemented.");
    }
    
    public override removeFirst(): T {
        throw new Error("Method not implemented.");
    }
    
    public override addLast(element: T): void {
        throw new Error("Method not implemented.");
    }
    
    public override removeLast(): T {
        throw new Error("Method not implemented.");
    }
    
    public override getSize(): number {
        throw new Error("Method not implemented.");
    }
};

export default ArrayLinkedList;