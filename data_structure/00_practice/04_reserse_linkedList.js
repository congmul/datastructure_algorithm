// Create Reverse Function with LinkedList.

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };

        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
    //    const newNode = { value: value, next: null}
        const newNode = new Node(value);

       this.tail.next = newNode;  // next property points newNode Object
       this.tail = newNode;        // tail object points newNode Object

       this.length++;
    }

    prepend(value) {
        // const newNode = { value: value, next: null};
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;

        this.length++;

    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null){
            array.push(currentNode.value)
            currentNode = currentNode.next;
        }

        return array;
    }

    insert(index, value) {
        if(index === 0){
            this.prepend(value);
            return this.printList();
        }

        if(index >= this.length){
            this.append(value);
            return this.printList();
        }

        const newNode = new Node(value);
        let leader = this.head;
        let holdingPointer;

        leader = this.traverseToIndex(index-1);

        holdingPointer = leader.next;

        leader.next = newNode;
        newNode.next = holdingPointer;
    }

    traverseToIndex(index) {
        //check params
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    remove(index) {
        // check params
        if(index === 0){
            this.head = this.head.next;
            this.length--;
            return this.printList();
        }

        if(index >= this.length){
            let currentNode = this.traverseToIndex(this.length - 2);

            currentNode.next = null;
            this.tail = currentNode;
            this.length--;
            return this.printList();
        }
        
        const leader = this.traverseToIndex(index-1);
        const unwatnedNode = leader.next;
        leader.next = unwatnedNode.next;
        this.length--;
        return this.printList();
    }

    // Create reverse() Function
    reverse() {
        if(!this.head.next){
            return this.head;
        }

        let first = this.head;
        this.tail = first;
        
        let second = first.next;
        

        while(second) {
            let temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;




    // My First Solution!!
        // const array = [];
        // let currentNode = this.head;
        // while(currentNode !== null){
        //     array.push(currentNode.value);
        //     currentNode = currentNode.next;
        // }

        // let newNode = new Node(array[array.length - 1]);
        // this.head = newNode;
        // this.tail = newNode;

        // for(let i = array.length - 2; i >= 0; i--){
        //     this.append(array[i]);
        // }

        return this.printList();
    }

}

const myLinkedList = new LinkedList(1);

myLinkedList.append(10);
myLinkedList.append(16);
myLinkedList.append(88);
myLinkedList.append(20);
myLinkedList.reverse();

console.log(myLinkedList.printList());
