const strings = ['a', 'b', 'c', 'd'];
// 4 bytes * 4 elements = 16 bytes of storage.
// 1 byte = 8 bits

// Access specific index
strings[2] // O(1)

// push - Add 'x' at the end of the array
strings.push('e'); // O(1)

// pop - delete 'x' at the end of the array
strings.pop(); // O(1)

// unshift - Add 'x' at the beginning of the array
strings.unshift('x') // O(n)

// splice -
strings.splice(2, 0, "alien"); // O(n/2) => O(n)

console.log(strings);


// Static Array vs Dynamic Array
// Dynamic Array can allocate memory automatically - automatic resizing ( Usually the area Doubles in size )
// When resizing automatic, it will iterate over all index - O(n)
// Javascript has Dynamic Array / Java has Static Array


