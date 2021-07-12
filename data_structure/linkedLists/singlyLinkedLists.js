const basket = ['apples', 'grapes', 'pears'];

// Linked list : apples --> grapes --> pears


// apples (head)
// 8947 --------> grapes   
//          8742 -------->  Pears (tail)
//                         372 --------> null

// prepend O(1)
// append O(1)
// lookup O(n)
// insert O(n)
// delete O(n)

// Basic linkedList
// 10 --> 5 --> 16

// let myLikedList = {
//     head: {
//         value: 10,
//         next: {             // Pointer : it should point next Value(node)
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }        
//     }
// }
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

        // for(let i = 1; i < index; i++){
        //     leader = leader.next;
        // }
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

}

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(102, 47);
myLinkedList.remove(110);
myLinkedList.remove(2);
console.log(myLinkedList.printList());

// console.log(myLinkedList);