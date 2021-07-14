// LIFO
// lookup O(n)
// pop O(1)
// push O(1)
// peek O(1)

// ex) Browser history : google -> udemy.com -> youtube
// Arrays or Linked Lists

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class myStack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        if(this.top){

            return this.top.value;
        }
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
          this.top = newNode;
          this.bottom = newNode;
        } else {
          const holdingPointer = this.top;
          this.top = newNode;
          this.top.next = holdingPointer;
          console.log(holdingPointer);
        }
        this.length++;
        return this;


    // My first Code
        // const newNode = new Node(value);
        // if(!this.bottom){
        //     this.bottom = newNode; 
        //     this.top = newNode;

        //     this.bottom.next = this.top
        // }else{
        //     this.top.next = newNode;
        //     // let temp = this.top;
        //     this.top = newNode;
        // }


        // this.length++;

        // return this.top;
    }

    pop() {
        if(!this.top) {
            return null;
        }

        if(this.top === this.bottom) {
            this.bottom = null;
        }

        this.top = this.top.next;
        this.length--;
        return this;

    // My first Code
        // if(!this.top){
        //     return null;
        // }
        // if(this.length === 1){
        //     let currentValue = this.bottom.value;
        //     this.length--;
        //     this.top = null;
        //     this.bottom = null;

        //     return currentValue;
        // }

        // let currentNode = this.bottom;
        // let counter = 0;
        // while(counter < this.length - 2){
        //     currentNode = currentNode.next;
        //     counter++;
        // }
        // console.log(currentNode);
        // let popValue = currentNode.next;
        // currentNode.next = null;
        // this.top = currentNode;

        // this.length--;
        // return popValue.value;
    }
    //isEmpty

}

const myStackFunc = new myStack();
// myStackFunc.peek()
myStackFunc.push('google')
myStackFunc.push('Udemy')
myStackFunc.push('Discord')
// myStackFunc.peek()

// console.log(myStackFunc.pop())
// console.log(myStackFunc.pop())
// console.log(myStackFunc.pop())

console.log(myStackFunc)

//Discord
//Udemy
//google