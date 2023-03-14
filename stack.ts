interface SNode<T> {
    value: T;
    next?: SNode<T>
}

class Stack<T>{
    public length: number;
    private top?: SNode<T>

    constructor() {
        this.length = 0;
        this.top = undefined;
    }

    peek() {
        return this.top?.value
    }

    push(value: T) {
        const node: SNode<T> = {
            value
        };
        const currentTop = this.top;
        this.length++;
        if (!currentTop) {
            this.top = node;
            return
        }
        node.next = currentTop;
        this.top = node;
    }

    pop() {
        const currentTop = this.top;
        if (!currentTop) {
            return undefined;
        }
        this.length--;
        this.top = currentTop.next;
        currentTop.next = undefined;
        return currentTop.value
    }
}