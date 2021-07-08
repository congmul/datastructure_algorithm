// Hash Table -> object in Javascript. and Map, Sets
let user = {
    age: 54,
    name: 'Kylie',
    magic: true,
    scream: function() {
        console.log('ahhhhh!');
    }
}

user.age;  // Look up - O(1)
user.spell = 'abra kadabra'; // Insert - O(1)
user.scream(); // O(1)

// Hash Table Collision makes Look up, Insert, and etc O(n) Time complexity.

// Map
const a = new Map(); // Merit : Order of Insertion
const b = new Sets(); // Only Stores keys.