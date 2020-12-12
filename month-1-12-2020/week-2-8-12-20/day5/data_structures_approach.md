# Data Structures Approach Lecture

- How to ace LeetCode Problems

## Objectives

- Psuedoclassical Inheritance
- Naive JS

## Psuedoclassical Inheritance

```JavaScript
function AnimalFunc(color) {
  const obj = Object.create(AnimalFunc);
  obj.color = color;
  return obj;
}

const dog = AnimalFunc('blue');
dog; // Function { color: 'blue' }

function AnimalClass(color) {
  const obj = Object.create(AnimalClass.prototype);
  obj.color = color;
}

const cat = AnimalClass('green')
cat; // AnimalClass { color: 'green' }
```

```JavaScript
function Stack() {
  // const this = Object.create(Stack.prototype);
  this.storage = {};
  this.index = 0;
  // return this;
}

Stack.prototype.push = function (value) {
  this.storage[this.index] = value;
  this.index += 1;
};

const oneStack = new Stack();
```

- Inheritance means the new instance of the class will check the Class.

## Native JS Data Structures

```JavaScript
// Arrs + objects
const arr = [];
const arr2 = new Array();

const obj = {};
const obj2 = new Object();

// Sets
const set = new Set();

const setFromArr = new Set([1,1,1,,2,2]);
setFromArr; // Set { 1, 2 }

// Maps -> store key value pairs in which the key can be anything
const map = new Map();
const func = () => 2 + 2;
map.set(func, 'anything'); // .set is a map method
map; // Map { [λ: func] => 'anything' }
map.get(func) // 'anything'

const badObj = {};
badObj[func] = 'anything';
badObj; // {() => 2 + 2: "anything"} // this is being stringified

const smallArr = [1];
map.set(smallArr, 'yay');
map.get(smallArr); // yay
map.get([1]); // undefined
```

# Non-native JS structures

## Stacks & Queues

- Stack
  - Last in First Out (LIFO)
  - Methods:
    - push()
    - pop()
  - Callstack

- Queues
  - First in First Out (FIFO)
  - Methods:
    - enqueue() -> unshift()  || push()
    - dequeue() -> pop()      || shift()
  - Asynchronous JS (callback queue, microtask, queue), BST

## Linked Lists

```JavaScript
function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.value = val;
  this.next = null;
}
```

- A collection of node, where each node references the next node

### Linked List Method: Add

- Create a node
- Check if the list is empy
  - Set head and tail to new node
- Else
  - Current tail.next should point to new node
  - Establish new node as tail

## Hash Tables

Hash tables are arrays

```JavaScript
function HashTable() {
  this.SIZE = 16; // arbitrary number
  this.length = 0; // the number of k/v pairs, if this number reaches a % of this.SIZE, invoke expand function then rehash everything
  // the array will be instantiated as
  // [undefined, undefined...]
  this.storage = new Array(this.SIZE);
}

function hashCode(key, size) {
  // hash the key based on the size
  // some crazy formula occurs
  // the integer returned is a
  // valid index in the Array
  return integer;
}
```

### Hash Table Method: Set

- Find index using hashCode
- Store value at index

```JavaScript
const table = new HashTable();
table.set('blue', 5) // blue hashes to 1
table.get('blue') // => 5
table.set('red', 8) // 'red' hashes to 1
table.get('red') // => 8
table.get('blue') // => 8 // THIS IS NO COLLISION HANDLING
```

|-------|-------------|
| index | buckets     |
|-------|-------------|
| 0     | undefined   |
| 1     | 5           |
| 2     | undefined   |
| 3     | undefined   |
|-------|-------------|

->

|-------|-------------|
| index | buckets     |
|-------|-------------|
| 0     | undefined   |
| 1     | 8           |
| 2     | undefined   |
| 3     | undefined   |
|-------|-------------|



#### Collision handling

- Find index using hashCode
- Check if the Array[index] is empty
  - Create a new object
  - Add a new key-value pair to the object
- Else
  - Add a new key-value pair to the object

```JavaScript
const table = new HashTable();
table.set('blue', 5) // blue hashses to 1
table.get('blue') // => 5
tablse.set('red', 8) // red hashes to 1
table.get('red') // => 5
table.get('blue') // => 5 // COLLISION IS HANDLED

```
|-------|-------------|
| index | buckets     |
|-------|-------------|
| 0     | undefined   |
| 1     | {'blue': 5} |
| 2     | undefined   |
| 3     | undefined   |
|-------|-------------|

->

|-------|----------------------|
| index | buckets              |
|-------|----------------------|
| 0     | undefined            |
| 1     | {'blue': 5, 'red' 5} |
| 2     | undefined            |
| 3     | undefined            |
|-------|----------------------|

In JavaScript this is pretty useless.

## Binary Search Tree

```JavaScript
function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}
```

### Binary Search Tree Method: Add (Recursive)

- Create a new node/leave/BST

- Check if the new value is < the current root
  - Check the left side is empty
    - Add node to the left side
  - Else
    - Call add function at the node

- Check if the new value > the current root
  - Check if the right side is empty
    - Add node to the right side
  - Else
    - Call add function add the node

### Tree Traversals

- Depth First Search
  - Starts with the root node and first visits all nodes ...
  - Uses a stack

- Breadth First Search
  - Uses a queue ?

#### Depth-Frist Search: Pre-Order Traversal

- Pattern of root, left, right

3 -> 5 -> 6
  |  | -> 4
  |
  | -> 1 -> 2

```JavaScript
BinarySearchTree.prototype.depthFirstPre = function (callback) {
  callback(this.value); // call back is console.log for this example
  if (this.left) this.leftdepthFirstPre(callback);
  if (this.right) this.right.depthFirstPre(callback);
}
// console = 3, 1, 2, 5, 4, 6
```

- O(n) time

#### Depth-First Search: In-order Traversal

- left - root - right

3 -> 5 -> 6
  |  | -> 4
  |
  | -> 1 -> 2

```JavaScript
BinarySearchTree.prototype.depthFirstIn = function (callback) {
  if (this.left) this.left.depthFirstIn(callback);
  callback(this.value);
  if (this.right) this.right.depthFirstIn(callback);
  // console = 1, 2, 3, 4, 6
}
```

- O(n) time

#### Depth-First Search: Post-Order Traversal

- left - right - root

3 -> 5 -> 6
  |  | -> 4
  |
  | -> 1 -> 2

```JavaScript
BinarySearchTree.prototype.depthFirstPost = function (callback) {
  if (this.left) this.left.depthFirstPost(callback)
  if (this.right) this.right.depthFirstPost(callback);
  callback(this.value);
  // console 2,1,4,6
}
```

### Breadth-First Serach

3 -> 5 -> 6
  |  | -> 4
  |
  | -> 1 -> 2

```JavaScript
BinarySearchTree.prototype.breadthFirst = function (callback) {
  const queue = [];
  queue.push(this);
  while (queue.length) {
    let temp = queue.shift();
    callback(temp.value);
    if (temp.left) queue.push(temp.left);
    if (temp.right) queue.push(temp.right);
  }
};
// console: 3,1,5,2,4,6
```

## Summary

- In psuedoclassic Inheritance, by useing the new keyword, JS enters in to construction mode
- Native JS data structures include array, objects, map and sets
- Linked Lists are a collection of nodes in which every node has a reference to the next node

### Questions

What does psuedoclassical mean in the statement psuedoclassic inheritance? If you ask an engineer whether or not JavaScript is a class based language, they will say no, we have functions that do what classes do.
Psuedoclassical means its really just syntactic sugar for creating classes using functions.