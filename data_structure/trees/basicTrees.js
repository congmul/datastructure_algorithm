// Root             
// Parent
// Child
// leaf
// Sibling

// Perfect Binary Tree - Completely filled (Nothing missing)
//  lookup O(log N) ,  insert O(log N) , delete O(log N)
//      O
//    /   \
//   O     O
//  / \   / \
// O   O O   O
// 
// Full Binary Tree - Node has either a zero or two child
//      O 
//    /   \
//   O     O
//  / \  
// O   O
//    /  \ 
//   O    O

function BinaryTreeNode(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
