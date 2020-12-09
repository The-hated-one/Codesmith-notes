# Data structures

To store data we need structures to hold them.

## Types and Composite Objects

Why should we know about about the type system
  - The type system dicates how we are allowed to store information (i.e. program state) and how we are allowed to pass this information around parts of our programs

- Why is it important to know about data structures?
  - Structuring our information/program state according to thoughtful patterns increases program efficiency
  - Using common data structures makes code more readable, understandable and maintainable.

## Roadmap

- Features of JavaScript's type system
  - Primitive Data Types
  - Composite Data Types
- New JavaScript Features
- Using Data Structures in JavaScript code

## Dynamic Typing

JavaScript is a dynamically typed language (a dynamic language). Variable DO NOT have a type. The values they hold have a type. Tehse get assigned at runtime.

```JavaScript
let hello = 2;
hello = "world"
```

This speeds the JavaScript development cycle, but is less efficient than statically typed languages at runtime.
E.g. in psuedocode:
```
let hello:number = 2;
```
- Java, C, C++ are statically typed.

1. By not being super clear, maybe later on your write some code that changes the datatype that you didn't mean it to. We wouldn't encounter this problem in a statically typed language.
2. When the engine is running our code, it can encounter problems, it can slowdown our compile and run time, because it has to reassign variable types. So in that sense it is less efficient, it takes an extra step at compile/runtime.

Statically typed languages have better performance at run-time intrinsically due to not needing to check types dynamically while executing (it checks before running).

TypeScript is an extension of JavaScript that allows it to be statically typed, but JavaScript itself is dynamically typed.

### Compile time

JavaScript goes throught the code, makes sure it is following the proper JavaScript syntax.

Compiling first checks if you have written proper code.

When you compile, you take a language and translate it to a lower-level language.
High-level languages are easier for humans to read.

## Transpiling

When you take one high level language it and turn it into another high level language, e.g. typescript -> JavaScript

### Run time

JavaScript actually runs the code.

## Weakly Typed

JavaScript is weakly typed.

```JavaScript
function add(a, b) {
  return a + b;
}
add(1, "cat") // "1cat"
```

JavaScript is making assumptions about what you want to do and taking extra steps for you. This is called type-coersion. This means JavaScript is weakly typed.

- Pro's -> great for developers as it is written in a language we understand. It makes a lot of assumptions for you, so we don't have to worry about the nitty gritty details.
- Con's -> we have less control, as we are not worrying about the nitty gritty details.

Why JavaScript took over -> because it doesn't have much system access, it was originally more of a sandbox language. That made it safe to run on the client side.

## Type Systems: Strong/Weak scale and Static/Dynamic Scale

- Static/Dynamic typins is about when information is acquired (either at compile-time or ot runtime)

- ....

## Primitive Data Types

- Number
- Str
- Null
- Undefined
- Float
- Bool
- Symbol (ES6)
- BintInt (ES10)

Primitive datatypes are **immutable**. You cannot mutate/change/alter any portion of them.

```JavaScript
let originalString = "abcd";
originalString[2] === "c"; // true
originalString[2] =  "2"; // No error will show
console.log(originalString) // "abcd" -> CANNOT BE DONE! Primitive datatypes can't be manipulated.
```

### Primitive DataTypes are Passed by Value

```JavaScript
function change(passedNum) {
  passedNum += 1;
}

let originalNum = 1;
change(originalNum);
console.log('originalNum is:', originalNum); // originalNum is: 1
```

## Composite Data Types

- Arrays -> is an object
- Objects

Objects are a javascript data type composed of Key/value pairs. We can change/update the key/value pairs in an object. Objects are therefore **mutable**!

```JavaScript
const myObj = {
  my_key: 123;
};

myObj.my_key = 321;

console.log(myObj.my_key) // 321
```

## JavaScript Arrays

Arrays are built-in objects organized by **integer-keyed** properties and a **length** property.

```JavaScript
const myArr = [0,1,2,3]; // length 4
// { 0:0, 1:1, 2:2, 3:3 }
```

## Pass by reference

You pass the exact reference to that specific object/array inside memory.

```JavaScript
function change(passedObj) {
  passedObj.myNum += 1;
}

const originalObj = { myNum: 1 };
change(originalObj);
console.log(originalObjs); // { myNum: 2 }
```

## Primitive vs Composite data types.

Primitive data types are **copied**. Object/composite data types are **referenced**.

`const` means your can't change my reference in memory. `let` means you can.

## What is ES6

The latest *major* release for JavaScript (ECMAScript 2015) was released in Fall of 2015. It's the 6th version of ECMAScript, and is often referred to ES6.

### Keyed Collections

ES6 introduces **Map** and **Set**.

- A set represents a unique set of values.
  - Set has methods like add, has delete, foreach, et al
  - Useful for algorithms.

- A map associates a value with a collection.
  - Map has methods like get, set has, foreach, et al

#### Map

- In an object, all keys are strings.

Maps, keys can be objects or anything, they also care about order.

```JavaScript
const trafficLights = new Map();
trafficLights.set('green', 'go');
trafficLights.set('yellow', 'be careful');
trafficLights.set('red', 'stop');
console.log(trafficLights.has('green'));
console.log(trafficLights.get('green'));
for([color, meaning] of trafficLights.entries()) {
  console.log(color, meaning);
}
```

## Object vs. Array

JavaScript objects and arrays are both examples of data structures. Specifically, they create composite data structures out of smaller componenets.

Array or Object? How should should we store all of the stock prices of Apple at 10 second intervals across the whole day?
  - An array.

Array or Object? :How should we store the frequency of each character in this sentence?:
  - An object.

## Searching Arrays

How to find an object by name in an array:

1. Direct lookup by index (O(1) constant time)
2. Loop through to find a match (O(n) linear time)

```JavaScript
let users = [{'will': 3}, {'dan': 4}, {'jared': 5}];
users[1].dan; /// value for dan is 4
```

## Searching Objects

Since you're referencing properties by key, the search is a direct lookup (O(1) - constant time)

```JavaScript
var users = { will: 3, dan: 4, jared: 5};
users['dan']; // 4
```

## Stacks and Queues

- Stack:
  - Last in, first out principle -> LIFO
  - push() on to the stack -> O(1) time -> constant time
  - pop() off of the stack -> O(1) time -> constant time
  - E.g. the CallStack -> which shows us where the thread of execution is.
  - Image a stack of pancakes, the first pancake that was made, is the last one that is eaten.

- Queue:
  - First in, first out -> FIFO
  - push/enqueue on to the stack -> O(1) time -> constant time
  - shift/dequeue off of the stack -> O(n) time -> linear time as you have to re-index everything
  - This time you are taking pancakes out from the bottom of the stack.
  - It is like a queue, if you walk up to a cash register, first person to join the line, is the first person to leave.
  - Printers use a queue, first item requested to be printed, is the first to leave the queue.

## Objects and Hash Tables

Objects use a unique method for finding memory addresses. A **hash function** is used to convert property keys to an address.

```JavaScript
let names = {
  dan: true
}
```

Hashing Algorithm
```
d = 4
a = 1
n = 14

-> in memory @4114 -> `true`
```

Now look at what value is stored at Dan, we check what is stored at 4114, the value is true.

## Hash Table Collision

```JavaScript
let names = {
  dan: true, // -> hashing algorithm 4114
  daad: true // -> hashing algorithm 4114
}
```

```
d = 4
a = 1
n = 14
-> in memory @4114 -> {dan: true} 4114

d = 4
a = 1
a = 1
d = 4
-> in memory @4114 -> {dan: true, daad: true}
```

## Linked List

- A linked list is a collection of objects (called nodes), each of which has a property that references (or points to) the next object in the list.

```JavaScript
// a is a Val
// next points to the next node
// [a, next] is our head
// [c, next] is our tail
[a, next] -> [b, next] -> [c, next] -> null
// So overall
[val, next] -> [val, next] -> [val, next] -> null // null means your reached the end of the list
```

- We must keep track of the first node (or head) in order to access and traverse our list.
- It's very useful to keep track of the last node (or tail) to give us a shortcut to add new nodes to the end of our list.
- But one the things that is most useful about linked lists is that adding or removing nodes from the middle of the list is very efficient compared to arrays.

The first node is called your head.

Say we want to add a node into the middle of our list between `b` and `c`. We start at the head, then search down until we get to `b`, and then we add...

```JavaScript
{ 
  val: a,
  next: { val: b,
          next: c,}
}
```

## Binary Search Trees

We move the smaller values to the left, larger values to the right.

```
8 -> 3  | -> 1
  |     | -> 6 -> 4
  |          | -> 7
  |
  -> 10 -> 14 -> 13

```

First value is the root.

- Binary Search Trees are designed to make data lookup very fast and efficient
- Like linked lists, the y are just collections of objects that point to each other.
- They can be traversed with different methods, predicated on when the value of the current node is provided or displayed.

- Depth first
  - Pre Order - emit as you get to each node
  - Post Order - emit the last time you visit the node
  - In Order - display in sorted order by going down the left side first

- Breadth first
  - Traverse in level order where we visit each node on a level before going to a lower level

How to handle duplicate values? Not sure

Balanced Binary Search Tree -> makes sure it is split left and right nice and evenly.

## Core Takeaways

- JavaScript is dynamically typed and weakly typed
- Primitive data types -> pass by value
- Composite data types -> pass by reference
- Man types of data we run into in the wild have a natural structure. By storing this data in the appropriate data structures, our code is more understandable and frequently more efficient.

- FINISH THIS UNIT! MASTER THIS MATERIAL.

### Questions

Hash table collision issue.

How does the next property work? Does each node have some sort of address? X

What happens if the same value comes up again in a binary search tree. E.g. root is 5, and new value is 5. What do we do? X

Is it correct to say lookup is efficient in a binary search tree than in an object direct lookup. So what is the benefit of a binary search tree compared to a hash table? Is it for the situation when we know we won't know how directly lookup the specific value. X

Is the internal structure of a binary tree, just like a linked list, that has a left.next point and a right.next point. X

