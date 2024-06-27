import LinkedList from "./linkedlist";

class Node {
    public data: Object;
    public next: Node;
    constructor(data: Object, next: Node) {
        this.data = data;
        this.next = next;
    }
};

class SinglyLinkedList<T> extends LinkedList<T> {

    private size: number;
    private top: Node;
    private bottom: Node;

    public override addFirst(element: T): void {
        if (this.top == null || this.top == undefined) {
            this.bottom = this.top = new Node(element, null);
        } else {
            this.top = new Node(element, this.top);
        }
        this.size++;
    }

    public override removeFirst(): T {
        if (this.top == null || this.top == undefined) {
            return null;
        }

        let temp: T = this.top.data as T;
        if (this.top.next != null) {
            this.top = this.top.next;
        } else {
            this.top = null;
            this.bottom = null;
        }
        this.size--;
        return temp;
    }

    public override addLast(element: T): void {
        if (this.bottom == null) {
            
        }
    }
    
    public override removeLast(): T {
        throw new Error("Method not implemented.");
    }

    public override getSize(): number {
        throw new Error("Method not implemented.");
    }

};

export default SinglyLinkedList;