// Recursion Possible Problem - Computer needs to allocate memory to remeber thigs.
// stack overflow can occur when we have recursion and there's no way to stop this recursive.

// 1. Identify the base case
// 2. Identify the recursive case
// 3. Get closer and closer and return when needed. Usually you have 2 returns.

let counter = 0;
function inception() {
    // base case
    if(counter > 3) {
        return 'done!'
    }
    counter++;
    return inception();
}

inception();