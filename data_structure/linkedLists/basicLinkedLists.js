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
       const newNode = { value: value, next: null}

       this.tail.next = newNode;  // next property points newNode Object
       this.tail = newNode;        // tail object points newNode Object

       this.length++;
    }

    prepend(value) {
        const newNode = { value: value, next: null};
        
        newNode.next = this.head;
        this.head = newNode;

        this.length++;

    }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);

console.log(myLinkedList);