{
    interface Stack {
        readonly size: number;
        push(value: string): void;
        pop(): string;
        print(): void;
    }

    type Node = {
        data: string;
        tail: Node | null;
    }

    class singleLinkedList implements Stack {
        constructor(readonly size: number = 0, private head: Node | null) { }
        push(value: string): void {
            const item: Node = {
                data: value,
                tail: this.head
            }
            this.head = item;
            this.size + 1;
        }
        pop(): string {
            if (this.head === null) {
                return 'null';
            }
            const result = this.head.data;
            this.head = this.head.tail;
            return result;
        }
        print(): void {
            console.log(JSON.stringify(this.head))
        }
    }
    const linkedList = new singleLinkedList(0, { data: '', tail: null });
    linkedList.push('a')
    linkedList.push('b')
    linkedList.push('c')
    linkedList.push('d')
    linkedList.push('e')
    const pop = linkedList.pop();
    console.log(pop);
    linkedList.print();
}