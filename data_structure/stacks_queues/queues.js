//FIFO
// lookup O(n)
// enqueue O(1)
// dequeue O(1)
// peek O(1)

// Wait list : Matt -- Joy -- Samir -- Pavel
// Arrays or Linked Lists

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.first;
    }

    enqueue(value) {
        let newNode = new Node(value);

        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }

        this.length++;

        return this;
    }
    dequeue() {
        if(!this.first){
            return null;
        }
        if(this.first === this.last){
            this.last = null;
        }
        let dequeueValue = this.first.value;
        this.first = this.first.next
        this.length--;

        return dequeueValue;
    }
}

const myQueue = new Queue();

console.log(myQueue.enqueue(5));
console.log(myQueue.enqueue(15));
console.log(myQueue.enqueue(10));
console.log(myQueue.enqueue(7));

console.log(myQueue.peek());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());

console.log(myQueue);