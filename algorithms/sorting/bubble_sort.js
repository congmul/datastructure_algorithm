// Move heighest number to back.
// O(n^2) - Titme Complexity
// O(n) - Space Complexity

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    // Compare with every adjacent two index
    // Move high number to back
    // until the largest item ends up in the last index then loop again.
    
    let counter = 1;

    while(counter < array.length){
        for(let i = 0; i < array.length - counter; i++){
            if(array[i] > array[i+1]){
                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
            }
        }
        counter++;
    }
    
}

bubbleSort(numbers);
console.log(numbers);