# Linked Lists
## Singly Linked Lists
- First Node : Head
- Last Node : Tail (*pointing null)
- There is a Node that has a value and pointer.
- A node is linked to next node until the last element that points to null.
<img src='./assets/img01.png' width='400px'>
### Time complexity
```
prepend O(1)
append O(1)
lookup O(n)
insert O(n)
delete O(n)
```
### pseudocode
```
Linked list : apples --> grapes --> pears


apples (head)
pointer --------> grapes   
         pointer -------->  Pears (tail)
                            pointer --------> null
```
## Doubly Linked LIsts
