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

```TypeScript
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

### Unknown type

- Use can put any time into known.
  - Any is more flexible
  - Unknown is more restrictive.

```TypeScript
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
userName = userInput; // NOT ALLOWED -> THROWS ERROR
// This is because userInput could not be a string.
// This however is allowed:
if (typeof userInput === 'string') {
  userName = userInput;
}
// This is because typescript knows we have run the check
```

```TypeScript
let userInput: any;
let userName: string;

userInput = 5;
userInput = 'Max';
userName = userInput; // ALLOWED -> any is more flexible
```

Hence unknown is often better than `any` because it is stricter.

### Never Type

This function never returns anything.

E.g
- A function for after throwing an error.
- A function that loops infinitely.

```TypeScript
function generateError(message: string, code: number): never {
  throw {message: message, errorCode: code};
}

let result = generateError('error', 500);
console.log(result); // this piece of code is never executed
```

## How to start a TypeScript project

To start your project run this command:

```
tsc --init
```

Now you can use this command to update all .js files from the latest .ts files:
```
tsc
```

And the following command to update all .js files automatically:
```
tsc -w
```

### TypeScript configuration

In `tsconfig.json`:
```JSON
{
  "compilerOptions": {
    ...
  },
  "exclude": [
    // You want to exclude node_modules from being updated when we run tsc
    // this is excluded by default, but if you specify exclude options you should exclude node_modules
    "node_modules",
    // The following are just examples to demonstrate how it works
    // this file will not be updated when we run tsc
    "filetobeexcluded.ts",
    // exlude all files that end with .dev.ts
    "*.dev.ts"
    // any file that ends in .dev.ts in any folder will be excluded
    "**/*.dev.ts"
  ],
  // if you use the include option, only files that are specified here will be included when we run tsc
  // so you compile include - exclude
  // likely you don't want to use this option
  "include": [
    "app.ts"
  ]
}
```

### Compiler Options

```JSON
{
  "compilerOptions": {
    "target": "es5", // which target javascript file do you want to compile the code to.
    // too see all available click in "es5" then press ctrl space,
    // "lib" -> if it is not set defaults are assumed
    "lib": [ // this is default setup and allows our ts files to use these features
      "dom",
      "es6",
      "dom.iterable",
      "scripthost",
    ],
    // "allowJs" allows javascript files to be compiled
    // "checkJs" run checks on JavaScript files -> can use in projects with no typescript at all
    "sourceMap": true, // if you set this to true, you will be able the source code in the browser in ts
    "outDir": "./dist", // specify where we want to output js files to
    "rootDir": "./src" // specify where we want to find our ts files
    "removeComments": true, // remove comments from output files
    // "noEmit": true // don't generate any typescript files, but still check them
    // "downlevelIteration": true // if your typescript code is behaving strangely with loops turn this on, it may fix it.
    "noEmitOnError": true, // don't convert any files to js when the tsc compiler fails
    "strict": true, // set all the following strict type checking options to true
    // "noImplicitAny": true,  // force us to declare parameter types
    // "strictNullChecks": true, // this causes us to stop forcing us use ! or a conditional to demonstrate values will definitely exist.
    // "strictFunctionTypes": true,                 /* Enable strict checking of function types. */
    // "strictBindCallApply": true, // makes sure you don't user bind, call and apply in a way that doesn't work with your code
    // "strictPropertyInitialization": true,        /* Enable strict checking of property initialization in classes. */
    // "noImplicitThis": true, // lets you know if you use the this keyword in an area where it is not clear what it refers to
    // "alwaysStrict": true, // says the javascript files are generated using strict mode

    // "noUnusedLocals": true,  // don't allow unused variables accept in global scope
    // "noUnusedParameters": // don't allow unused parameters
    // "noImplicitReturns": true, // get an error if you have a function that sometimes returns something and sometimes does not
  }
}
```

#### "strictNullChecks"

Example:
  - If true this is not allowed:
```TypeScript
const button = document.querySelector('button');

button.addEventListener('click', () => {
  console.log('Clicked');
});
```
Instead it must be written like this:
```TypeScript
const button = document.querySelector('button')!; // Notice the ! here

button.addEventListener('click', () => {
  console.log('Clicked');
});
```
Or like this:
```TypeScript
const button = document.querySelector('button');

if (button) { // here we check if it exists
  button.addEventListener('click', () => {
    console.log('Clicked');
  });
}
```
If you set it to false you don't need to use the `!` or the conditional check.

## Debugging

Use debugger for chrome.

Enable the `sourceMap` option in `tsconfig.json`.

Place your breakpoint by clicking the red dot a certain line.

Then click at the very top bar on the page `Run`, `Start Debugging`. You can select your environment as chrome. (change this to Node.js if necessary).

This will add some `launch.json` files in your `.vscode` directory.

In that file set the `url` property to match the `url` where your dev server is running.

Now click `Run` and `Start debugging` again and it will open up a new tab.

## Tips

To convert `.ts` to `.js` simply run the following command:
```
tsc file.ts
```

In order to automatically convert a file to .js for each change that you make:
```
tsc file.ts -w
OR
tsc file.ts --watch
```

## Side notes

I disabled vscode-icons and installed material icon theme.
I installed TSLint and then disabled it -> perhaps uninstall.