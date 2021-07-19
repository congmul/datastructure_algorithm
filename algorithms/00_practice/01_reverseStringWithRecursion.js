// Here is a little bonus exercise. 
// You can see the repl attached in the resources to the lecture, as well as the solution.
// Try to implement the answer recursively and also iteratively if you want!

// Ps, here is one of my favourite real world application example of 
// when to use recursion: https://stackoverflow.com/questions/105838/real-world-examples-of-recursion

//Implement a function that reverses a string using iteration...and then recursion!
function reverseStringIterative(str) {
    let newStr = '';
    for(let i = str.length - 1; i > 0; i--){
        newStr += str[i];
    }

    console.log(newStr);
}

// reverseStringIterative('yoyo mastery')
//should return: 'yretsam oyoy'

function reverseStringRecursive(str) {
    if(str.length === 1){
        return str[0];
    }
    return str[str.length - 1] + reverseStringRecursive(str.substr(0, str.length - 1));
}

console.log(reverseStringRecursive('yoyo mastery'))
