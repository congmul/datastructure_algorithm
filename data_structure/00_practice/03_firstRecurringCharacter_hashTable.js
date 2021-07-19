//Google Question
//Tell me the first recurring character.
//I want a fucntion that I can enter this array, this input is going to look through all the numbers. and tell me which one gets repeated first.

//Given an array = [2,5,1,2,3,5,1,2,4]
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]
//It should return 1

//Given an array = [2,3,4,5]
//It should return undefined

//Bonus
//Given an array = [2,5,1,5,2,3,5,1,2,4]
//It should return 5

const firstRecurringCharacter = (arr) => {
    const hashTable = {};

    for(let i = 0; i < arr.length; i++){  // O(n^2)
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j]) {
                hashTable[j] = arr[j];
            }  
        }
    }
    console.log(hashTable);
    // return first key of the object.
    return hashTable[Object.keys(hashTable)[0]];

    for (let i = 0; i < arr.length; i++){  // O(n)
        if(!hashTable[arr[i]]){
            hashTable[arr[i]] = true;
        }else{
            return arr[i];
        }
    }

    return undefined;
}

console.log(firstRecurringCharacter([2,5,1,5,2,3,5,1,2,4]))