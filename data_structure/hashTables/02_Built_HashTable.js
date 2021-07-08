class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    // UnderScore : Private Property - Cannot access this function out side of this class.
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }

        return hash;
    }

    set(key, value) { // O(1)
        // To find the address where key and value are stored in.
        let address = this._hash(key);
        if(!this.data[address]){
            this.data[address] = [];
        } 

        this.data[address].push([key, value]);
        return this.data;
    }
    
    get(key) {  // O(1)
        let address = this._hash(key);

        const currentBucket = this.data[address];
        if(currentBucket) {
            for(let i = 0; i < currentBucket.length; i++){
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }

    keys() {
        if(!this.data.length){
            return undefined;
        }
        const keysArray = [];
        // loop through all the elements
        for (let i = 0; i < this.data.length; i++){
            if(this.data[i]){
                keysArray.push(this.data[i][0][0])
            }
        }

        return keysArray;
    }

}

const myHashTable = new HashTable(50);
console.log(myHashTable.set('grapes', 10000));
console.log(myHashTable.set('apples', 25));
console.log(myHashTable.set('apple', 25));
console.log(myHashTable.set('oranges', 2));
console.log(myHashTable.keys());

