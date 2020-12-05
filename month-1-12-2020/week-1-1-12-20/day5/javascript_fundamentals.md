# JavaScript Fundamentals ES6

## Rest Parameter

Accept an infinite array of arguments

```JavaScript
function printRoster(...roster) {
  roster.forEach(function(name){
    console.log(name);
  });
};
```

## Spread Syntax

```JavaScript
const arr1 = [1,2]
const arr2 = [3,4]
const allFour = [ ..arr1, ..arr2];
console.log(allFour) // [1,2,3,4]

const str = 'hi';
const arr = [...string]
console.log(arr) // ['h', 'i']
```

```JavaScript
function getMax() {
  return Object.values(arguments).reduce(
    function(a,b) {
      return Math.max(a,b)
    }
  )
}

// Spread syntax

function getMax() {
  return Math.max(...arguments);
}
console.log(getMax(1,5,7)) // 7

function print() {
  console.log(...arguments)
}
print(1,2,3) // 1,2,3

///

function printRoster(...roster) {
  roster.forEach(function(name){
    console.log(name);
  })
}

function logScores(score1, score2, score3) {
  console.log(score1, score2, score3);
}

const scores = [88, 96, 94]

logScores(...scores)
```


## Array Destructuring

```JavaScript
const testScores = [88, 96, 94];
const [score1, score2, score3, score4] = testScores

console.log(score1, score2, score3) // 88 96 94 undefined
```

## Object Destructuring

```JavaScript
const book = { title: 'name', author: 'will' }
const { title, author } = book
console.log(title, 'by', author) // name by will
```

## Flatten

```JavaScript
function flatten(array) {
  let falt = [];
  for (let i = 0; i < array.length; i++) {
    flat = flat.concat(array[i]);
  }
  return flat;
}
```

OR

```JavaScript
array.flat();
```

## Flatten Deep

```JavaScript
array.flat(Infinity);
```

OR

```JavaScript
function flattenDeep(array) {
  let flat = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) flat = flat.concat(flattenDeep(array[i]));
    else flat = flat.concat(array[i])
  }
  return flat;
}

// OR USING SPREAD

function flattenDeep(array) {
  let flat = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) flat = flat.push(...flattenDeep(array[i]));
    else flat = flat.concat(array[i])
  }
  return flat;
}

// Another recursive loop

function fD(array, i) {
  const flat = [];
  if(array[i] === undefined) return flat;
  if(Array.isArray(array[i])) fD(array[i], 0)
  return flat;
}
```

## Primitive vs Composite Data types

- Primitive -> Pass by value
  - String
  - Number
  - Undefined
  - Null
  - Boolean
  - Symbol

- Composite -> Pass by reference
  - Array
  - Objects

```JavaScript
let num = 3
    num = num + 1
    num = 4

//

const a = [1, 2, 3]
const b = a;
b[0] = 4 // [4,2,3] -> PASS BY REFERENCE

console.log(a) // [4, 2, 3]

let a = 3
let b = a
b = 4
console.log(a) // 3 -> PASS BY VALUE 
```


## Shallow Clone

- Shallow clone creates a copy of the input at the first level.

```JavaScript
function clone(input) {
  if (Array.isArray(input)) return input.slice();

  if (typeof input === 'object') {
    const copy = {};
    for (const key in input) {
      copy[key] = input[key];
    }
    return copy;
  }
}
```

```JavaScript
const a = [0,1,[2,3]];
const b = a.slice(); // [0,1,[2,3]];
a === b // false
a[2] === b[2]

const obj = { a: 1, b: 2, c: {...}};
```

## Deep Clone

```JavaScript
function cloneDeep(original) {
  if (Array.isArray(original)) {
    const copy = [];
    original.forEach((el) => {
      if (el instanceof Object) {
        copy.push(cloneDeep(ele));
      } else {
        copy.push(ele);
      }
    });
    return copy;
  }

  if (original instanceof Object) {
    const copy = {};
    for (const key in original) {
      if (original[key] instanceof Object) {
        copy[key] = cloneDeep(original[key]);
      } else {
        copy[key] = original[key]
      }
    }
    return copy;
  }
  return original;
}
```

## Arrow functions

```JavaScript
const multiplyby2 = num => num * 2;
```

Arrow functions cannot bind the `this` keyword.

They also do not have access to the `arguments` Object.

## Summary

- Rest parameter
- Spread Syntax
- Array & object destructuring
- Primite and composite data types
- ...

### Questions

Nicole -> missed something about the flat