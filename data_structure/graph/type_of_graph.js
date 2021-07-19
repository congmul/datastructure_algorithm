// Graph is simply a set of values that are related in a pairwise fashion.

// Type of Graphs

// Directed (Oneway or bidirectional) vs Undirected (Back and Forth)
// Weight (its Edges have information) vs Unweight
// Cyclic vs Acyclic


// Create Own Graph

// Edge list
const graph = [[0, 2], [2, 3], [2, 1], [1, 3]];

// Adjacent List
const graph02 = [[2], [2, 3], [0, 1, 3], [1, 2]]

// Adjacent Matrix - 0 means No, 1 means Yes
const graph03 = {
    0 : [0, 0, 1, 0],
    1 : [0, 0, 1, 1],
    2 : [1, 1, 0, 1],
    3 : [0, 1, 1, 0]
}