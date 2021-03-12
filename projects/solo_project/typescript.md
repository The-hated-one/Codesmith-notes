# Typescript

## Course Outline

- Typescript basics
- Compiler & Configuration Deep Dive
- Working with Next-gen JS Code
- Classes & Interfaces
- Advanced Types & TypeScript Features
- Generics
- Decorators
- Time to Practice - Full Project
- Working with Namespaces & Modules
- Webpack & TypeScript
- Third-Party Libraries & TypeScript
- React + TypeScript & NodeJS + TypeScript

## How to get the most out of the course

- Watch the Videos -> At you spreed!
- Code Along -> Pause and rewind
- Practice -> advance on your own
- Debug & Search -> use attached Code, Google, Udemy Search
- Ask & Answer -> Ask in the Q&A section, but also help others.

## Types

### Core Types

- number -> int, negative, floats
  - In javascript, all numbers are floats. i.e. 5 === 5.0
- strings -> '', "", ``/template literals, all text values
- bool -> true, false, just these two, no truthy or falsy values
- Object -> { age: 30 }
- Array -> Type can be flexible or strict

```TypeScript
let favoriteActivities: string[];
favoriteActivities = ['Sports'];

let favoriteActivities2: any[];
favoriteActivities2 = ['Sports', 1];
```

- Tuple -> fixed length and fixed type array -> ADDED BY TYPESCRIPT
  - Doesn't work for `.push`, it won't throw an error.

```TypeScript
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // tuple
} = {
  name: "Tom",
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
};
```

- Enum -> enum { NEW, OLD } -> Automatically enumerated global constant identifiers -> ADDED BY TYPESCRIPT

```TypeScript
enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
  name: "Tom",
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};

if (person.role === Role.ADMIN) {
  console.log('is author');
}

// You can also set what the identifies map to specifically
enum Role2 { ADMIN = 5, READ_ONLY = 'READ_ONLY', AUTHOR = 200 };
```

- Any -> This kind of assignment allows anything
  - AVOID THIS WHENEVER POSSIBLE.

### Union Types

- Declare a variable as one of multiple possible types:

```TypeScript
function combine(input1: number | string, input2: number | string) {
  let result;
  // note how this if else statement is necessary
  // type script doesn't like us using input1 + input2, it wants us to deal with
  // number and string separately
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
const combinedAges = combine(30, 26);
const combinedNames = combine('Max', 'Anna');
```

### Literal Types

- Declare a variable with a specific value.

```TypeScript
function combine(
  input1: number | string, // union type
  input2: number | string, // union type
  resultConversion: 'as-number' | 'as-text' // literal type
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result
}

const combinedAges = combine(30, 26, "as-number");
const combinedAges2 = combine('30', '26', "as-number");
const combinedNames = combine("Max", "Anna", "as-text");
```

### Custom Type Aliases

```TypeScript
type Combinable = number | string; // custom alias
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result
}
```

## Type Inference

You do not have to declare type on initialization of a variable, because it infers type by doing its best to understand what the type of the variable is.

However you can still explicitly declare variable type on initialization.

E.g.
```TypeScript
let number1: number = 5;
```

This is not considered good practice, unless you are not actually defining the variable a type on initialization.

E.g.
```TypeScript
let number1: number;
number1 = 5;
```

Similarly for an object you could do this:
```TypeScript
const person: {
  name: string;
  age: number;
} = {
  name: "Tom",
  age: 30,
};
```

However this would be best practice:
```TypeScript
const person = {
  name: "Tom",
  age: 30,
};
```

## Functions

- You can explicitly declare output type.
  - You normally don't need to do this, unless you have a very specific reason.

```TypeScript
function add(n1: number, n2: number): number {
  return n1 + n2;
}
```

### Void type

- Typescript adds a type for not returning anything. 

```TypeScript
function printResult(num: number): void { // void type for returning nothing
  console.log('Result: ' + num);
}
```

This also works:

```TypeScript
function printResult(num: number): undefined {
  console.log('Result: ' + num);
  return;
}
```

However `void` is the standard. So use `void`.

### Function Types

- You can do this:

```TypeScript
function add(n1: number, n2: number) {
  return n1 + n2;
}
function printResult(num: number): void {
  console.log("Result: " + num);
  return;
}
let combineValues: Function;
combineValues = add;
combineValues = printResult; // THIS ERROR IS NOT PICKED UP -> PROBLEM
console.log(combineValues(8, 8));
```

- However this is not ideal, it could be set to any function, which could lead to type errors.
  - Hence we have the following solution using function types:

```TypeScript
function add(n1: number, n2: number) {
  return n1 + n2;
}
function printResult(num: number): void {
  console.log("Result: " + num);
  return;
}
let combineValues: (a: number, b: number) => number; // here we are using function types
combineValues = add;
console.log(combineValues(8, 8));
```

- This can also be used for callback functions:

```JavaScript
// Here in this situation, setting the callback return type as void
// does not prevent us from returning something in the callback function
// instead it just doesn't check what is returned by the callback
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}
addAndHandle(10, 20, (result) => {
  console.log(result);
});
```

## Unknown type

## Tips

To convert `.ts` to `.js` simply run the following command:
```
tsc file.ts
```

## Side notes

I disabled vscode-icons and installed material icon theme.
I installed TSLint and then disabled it -> perhaps uninstall.