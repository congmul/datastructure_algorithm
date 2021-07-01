const mergeSortedArrays = (arr1, arr2) => {
    // Check input
    if (arr1.length === 0){
        return arr2;
    }
    if (arr2.length === 0){
        return arr1;
    }

    // nested Loop - O(n^2)

    // Brute Coding
    const newArr = [];
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];
    let i = 1;
    let j = 1;

    while(arr1Item || arr2Item){
        if(!arr2Item || arr1Item < arr2Item){
            newArr.push(arr1Item);
            arr1Item = arr1[i];
            i++;
            
        }else{
            newArr.push(arr2Item);
            arr2Item = arr2[j];
            j++;
        }
    }   
    console.log(newArr);

    // Use sorting built-in function
    // arr1 = [...arr1, ...arr2];
    // console.log(arr1.sort((a, b) => a - b));

   
}

mergeSortedArrays([0,3,4,29,31], [4,6,30]);
//[0, 3, 4, 4, 6, 30, 31]

