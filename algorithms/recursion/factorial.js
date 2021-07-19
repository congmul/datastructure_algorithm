// Write two functions that ifnds the factorial of any number.
// One should use recursivve, the other should just use a for loop

function findFactorialRecursive(number) {   // O(n)
    if(number <= 0){
        return 1;
    }

    return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number){  // O(n)
    let answer = 1;
    for(i = number; i >= 1; i--){
        answer *=  i;
    }
    return answer;
}

console.log(findFactorialRecursive(0));
console.log(findFactorialIterative(0));