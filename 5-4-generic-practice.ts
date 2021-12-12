{
    interface Stack<T> {
        readonly size: number;
        push(value: T): void;
        pop(): T;
        print(): void;
    }

    type Node<T> = {
        data: T;
        tail: Node<T>;
    }

    class singleLinkedList<T> implements Stack<T> {
        private head: Node<T>;
        constructor(readonly size: number = 0) { }
        push(value: T): void {
            const item: Node<T> = {
                data: value,
                tail: this.head
            }
            this.head = item;
            this.size + 1;
        }
        pop(): T {
            if (this.head === null) {
                throw new Error('Stack is empty')
            }
            const result = this.head.data;
            this.head = this.head.tail;
            return result;
        }
        print(): void {
            console.log(JSON.stringify(this.head))
        }
    }
    const linkedList = new singleLinkedList<string>(0);
    linkedList.push('a')
    linkedList.push('b')
    linkedList.push('c')
    linkedList.push('d')
    linkedList.push('e')
    const pop = linkedList.pop();
    console.log(pop);
    linkedList.print();
    const linkedList2 = new singleLinkedList<number>(0);
    linkedList2.push(1)
    linkedList2.push(2)
    linkedList2.push(3)
    linkedList2.push(4)
    linkedList2.push(5)
    const pop2 = linkedList2.pop();
    console.log(pop2);
    linkedList2.print();
}