import FifoCollection from "./fifocollection";
import Queue from "./queue";
import SinglyLinkedList from "./singlylinkedlist";


(function main() {
    let collection: FifoCollection<number> = new Queue<number>(new SinglyLinkedList<number>());
    collection.offer(10);
    collection.offer(40);
    collection.offer(100);
    collection.offer(20);

    console.log(collection.pool()); // 10
    console.log(collection.pool()); // 40
    console.log(collection.pool()); // 100
    console.log(collection.pool()); // 20
    console.log(collection.pool()); // undefined
})();