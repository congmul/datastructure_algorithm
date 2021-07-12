// doubly LinkedList has next node and also previous node!
// singly vs doubly 
// singly - less memory, a little bit fast
// doubly - can be iterated or traversed both side(from front or back)

class Node {
    constructor(value){
        this.value = value;
        this.previous = null;
        this.next = null;
    }
}

class doublyLinkedLists {
    constructor(value) {
        const newNode = new Node(value);

        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);

        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;

        this.length++;

        return this.printList();
    }

    prepend(value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;
        
        this.length++;

        return this.printList();
    }

    insert(index, value) {
        if(index === 0){
            return this.prepend(value);
        }
        if(index >= this.length){
            return this.append(value);
        }

        const newNode = new Node(value);

        let leadNode = this.traverseToIndex(index - 1);
        console.log(leadNode);
        leadNode.next.previous = newNode;
        newNode.next = leadNode.next;
        newNode.previous = leadNode;
        leadNode.next = newNode;

        this.length++;

        return this.printList();
    }

    traverseToIndex(index) {
        let counter = 1;
        let currentNode = this.head.next;

        while(counter != index){
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }

    printList(){
        const array = [];
        let currentNode = this.head;

        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
}

mydoublyLinkedList = new doublyLinkedLists(5);
console.log(mydoublyLinkedList.printList())
console.log(mydoublyLinkedList.append(10));
console.log(mydoublyLinkedList.append(15));
console.log(mydoublyLinkedList.prepend(20));
console.log(mydoublyLinkedList.insert(3, 4));
console.log(mydoublyLinkedList);

// console.log(mydoublyLinkedList)