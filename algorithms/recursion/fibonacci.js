// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, 
// that means that for N=5 -> 2+3

// Iterative vs Recursive
// Recursive is more readable! and useful for tree data sgructures and doing traversal.


function fibonacciIterative(n){  // O(n)
    let myArr = [0, 1];

    for(let i = 2; i <= n; i++){
        myArr.push(myArr[i-1] + myArr[i-2]);
    }
    console.log(myArr[n]);
}
fibonacciIterative(6)


function fibonacciRecursive(n){  // O(2^n) - Why we use recusive function?? 
    if(n < 2){
        return n;
    }

    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);

}

console.log(fibonacciRecursive(6));