interface QNode<T> {
    value: T;
    next?: QNode<T>;
}

class Queue<T> {
    public length: number;
    private head?: QNode<T>;
    private tail?: QNode<T>;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }

    peek() {
        return this.head?.value;
    }

    dequeue() {
        const head = this.head;
        if (!head) {
            return undefined;
        }
        this.head = this.head?.next;
        this.length--;
        head.next = undefined;
        return head.value
    }

    enqueue(value: T) {
        const node: QNode<T> = {
            value
        }
        this.length++;
        const tail = this.tail;
        if (!tail) {
            this.tail = node;
            this.head = node;
            return;
        }
        tail.next = node
        this.tail = node;
    }

}