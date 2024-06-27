// A refined abstraction.

import ArrayLinkedList from "./arraylinkedlist";
import FifoCollection from "./fifocollection";

class Queue<T> implements FifoCollection<T> {

    private list: ArrayLinkedList<T>;

    constructor(list: ArrayLinkedList<T>) {
        this.list = list;
    }
    
    public pool(): T {
       return this.list.shift();
    }

    public offer(element: T): void {
        this.list.push(element);
    }
};

export default Queue;