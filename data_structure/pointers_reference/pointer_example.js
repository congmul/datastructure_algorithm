let obj1 = { a: true } // Allocate a memory to store { a: true } and obj1 points to the memory location.
let obj2 = obj1;    // obj2 points to the memory location that has { a : true } data.

obj1.a = 'foo';    // Change the data in the memory location that store { a: true }
console.log(obj2)  // { a: 'foo' } obj2 still points to the same memory location as obj1.

delete obj1  // even if obj1 object is deleted, the memory location that store { a: foo } still remain.
             // because obj2 sill points to the memory location.

obj2 = 'fooboo'  // the data in the memory location is deleted automatically because nothing points to the memory location.
                 // It calls garbage collection.


// Some low level program languages don't garbage collection algorithm, 
// so they should handle the memory manually.