// Select the smallest item.
// Move the smallest item to the first index.
// Loop again

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    let minNum = array[0];
    let minIndex = 0;
    let currentIndex = 0;

    while(currentIndex < array.length){
        for(let i = currentIndex; i < array.length; i++){
            if(minNum > array[i]){
                minNum = array[i];
                minIndex = i;
            }
        }
        let temp = array[currentIndex];
        array[currentIndex] = minNum;
        array[minIndex] = temp;
        minNum = temp;
        currentIndex++;
    }
}

selectionSort(numbers);
console.log(numbers);