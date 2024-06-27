// Abstraction class.
// It represents a first in first out collection.
interface FifoCollection<T> {

    // Adds an element to a collection.
    offer(element: T): void;

    // Removes & returns the first element from the collection
    pool(): T;
};

export default FifoCollection;