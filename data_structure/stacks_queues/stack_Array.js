// LIFO
// lookup O(n)
// pop O(1)
// push O(1)
// peek O(1)

// ex) Browser history : google -> udemy.com -> youtube
// Arrays or Linked Lists


class myStack {
    constructor(){
        this.array = [];
    }

    peek() {
        return this.array[this.array.length - 1]
    }

    push(value) {
        this.array.push(value);

        return this.array;
    }

    pop() {
       this.array.pop();

       return this.array;
    }

}

const myStackFunc = new myStack();
// myStackFunc.peek()
myStackFunc.push('google')
myStackFunc.push('Udemy')
myStackFunc.push('Discord')
console.log(myStackFunc.peek())

// console.log(myStackFunc.pop())
// console.log(myStackFunc.pop())
// console.log(myStackFunc.pop())

console.log(myStackFunc)

//Discord
//Udemy
//google