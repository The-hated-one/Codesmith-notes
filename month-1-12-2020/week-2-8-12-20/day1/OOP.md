# JavaScript the Hard Parts Classes & Prototypes - Object Oriented Programming

Taught by David O'Sullivan -> Lead Instructor for LA.

## Functional programming

- The idea of dealing with pure functions.

## OOP

- Enourmously popular padadigm for structuring our complex code at scale.
- Easy to add features and functionality
- Performant -> efficient in terms of memory
- Easy for us and other developers to reason about (a clear structure)


### Building a Quiz game

Fundamentally we are only really doing 2 things in programming:

1. Storing/using data.
2. Running functionality.

### Objects - store functions with their associated atat!

this is the principle of encapsulation.

```JavaScript
const user1 = {
  name: 'Will',
  score: 3,
  icnrememnt: function() {
    user1.score++;
  }
}

user1.increment(); // user1.score => 4
```

### Dot notation

- Declare an empty object
- Add properties with dot notation

```JavaScript
const user2 = {}

user3.name = "Eva";
user3.score = 9;
user3.increment = function() {
  user3.score++;
};
```

### Creating using Object.create

- Object create is going to give us fine-grained control over our object later on.
- Object create always returns to us an empty object.

```JavaScript
const user3 = Object.create(null);

user3.name = "Eva";
user3.score = 9;
user3.increment = function() {
  user3.score++;
};
```

### Solution 1 - Generate object using a function

```JavaScript
function userCreator(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.incrememnt = function() { 
    user.score++;
    }
  return newUser
}

const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment();
```

### Under the hood notes solution 1

JavaScript is a single-threaded language. Thread of Execution.

First level on the call stack is `global()`, the global execution context.

Run, invoke, execute or call. All words for invoking a funciton.

The callstack is a stack.

The local execution context is within the global execution context.

When we push a new local execution context to the callstack, the thread of execution enters that execution context.

Function level execution context.

Parameters are matched up to arguments.

Parameters are the placeholders.

Arguments are actual value that gets passed in.

So we assign the value of the arguments to parameter labels in the local memory.

Line 3 -> creating a new key and adding to the the newUser object. Then we are assigned the value of the pair to that key as the item in the location in local memory referenced by the label name, which in this case is "Will".

Line -> return out the newUser Object to the global memory and storing as the value assigned to the variable label user1.

Then we garbage collect the execution context and pop it off the callstack.

Garbage collected -> cleans up any old execution context.

Now we return to the global execution context.

Line 11:

Declare a new constant label 'user2' in global memory. Then we are going to invoke the function userCreator, creating a new local execution context within the global execution context, pushing it onto the call stack.

Then the thread of execution enters this new local execution context and in local memory the argument 'Time' is assigned to the paramter label name, and the argument 5 is assigned to to the parameter label score.

Loops are blocked scoped, which means they have their own little space in memory.

## Solution 1 problem

Each time we create a new user we make space in our computer's memory.

## Solution 2 - Using the prototype chain

```JavaScript
function userCreator (name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  increment: function() {this.score++;}
  login: function() {console.log('Logged in');}
}

const user1 = userCreator("Will", 3);
const user2 =  userCreator("Tim", 5);
user1.incrememnt();
```

### Under the hood notes Solution 2

On line 2 -> we are passing in the userFunctionStore Object as the argument to `Object.create`.

Create a new local function level execution context, and a local memory.

Pop it onto the callstack.

Then our thread of execution comes into the new local function level execution context.

Then we assign the values of the arguments to the labels of their associated paramters within the local memory of the local function level execution context.

Line 12 ->
Find user1 in global memory.
Search within the user2 object for a function incrememnt.
 - Doesn't find it so searches up the prototype chain?

Whenever we invoke a function, we always have a `this` context. What `this` points to depends on what object we are calling our function on. The left of the dot rule.

What object is `this` refering to. The one to the left of the dot:

```JavaSript
user1.increment()
```

`this` on line 8 refers to the user1 object.
`this.score++` will be read as user1.score++.

There is a hidden property in JavaScript called the `__proto__` the dunder proto, which is stored with `user1` and `user2`.

Object.create sets the dunder proto to point to whatever object is passed in as the argument to `Object.create()`.

This is called the prototype chain.

### Solution 2: Using the prototype chain

Problem - No problems! It's beautiful. Maybe a little long-winded.

Write this every single time - but it's 7 words!

```JavaScript
const newUser = Object.create(userFunctionStore);
return newUser
```

## Solution 3: Using the prototype chain.

```JavaScript
const user1 = new userCreator("Will", 3);
const user2 = new userCreator("Tim", 5);
```
1. Create a new user object
2. Return a new user object


## Interlude - functions are both objects and functions

```JavaScript
function multiplyBy2(num) {
  return num * 2;
}

multiplyBy2.stored = 5;
multiplyBy2(3) // 6

multiplyBy2.stored // 5
multiplyBy2.prototype // {} -> every object in javascript has a prototype key - value pair, by default an empty object.
```

## Under the hood solution - solution 3

```JavaScript
function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}

UserCreator.prototype.increment = function(){
  this.score++;
}
UserCreator.prototype.login = function(){
  console.log("login");
}

const user1 = new UserCreator("Eva", 9);

user1.increment();
```

On line 5 -> we are adding the key increment to the prototype object within the UserCreator object, and associating with the value of the function definition `{ this.score++ }`;

On line 11 -> the new keyword gives an automatically created object.
1. this: {....} the new keyword gives an automatically created object.
2. Set dunder proto of that prototype object
3. We have an implicit return

```JavaScript
// when running new UserCreator("Eva", 9);
// Local execution context
// 1 define this object (auto generated object)
// Add __proto__
// Return this (auto generated object)
// local mem
name: 'Eve'
score: 9
this: {
  name: 'Eve'
  socre: 9
  _proto_ // refers to UserCreator.prototype
}
```

The dunder proto does not point to the other object (`userCreator`) but to the prototype object within that object.

`this` refers to object upon which the function is being called.

### Benefits of Solution 3

- Benefits:
  - Faster to write
  - Still typical practice in pro code

- Problems
  - We have to upper case the first letter of the function so we know it requires 'new' to work!

## Solution 4: The ES6 class 'syntactic sugar'

```JavaScript
class UserCreator {
  constructor (name, score){
    this.name = name;
    this.score = score;
  }
  increment (){
    this.score++;
  }
  login (){
    console.log("login");
  }
}

const user1 = new UserCreator("Eva", 9);

user1.incrememnt();
```


## Tips

It is encouraged to diagram this out.

## Benefits of JavaScript

Garbage collection is handled automatically.

### Questions

  In reference to Xiao's question, would we want to put directly in UserCreator outside the prototype any values that we may want to reassign values to.

  Is clojure used?

---

  What would happen if we stored the increment function in the UserCreator function, would that behave differently? And if so why?
  And is the `UserCreator` function returning anything?
  Why do we need to use `this.name` and `this.score` now?
  What if we did `UserCreator.name

---

Is the callstack an array? As we use the words push and pop? X

Are all Local Execution contexts function level execution contexts? Yes

Does the thread of execution enter the local execution context before arguments are assigned to parameters in local memory? Yes

Is there a difference between initialise and declare?

---

Does ES6 class notation use the prototype chain?

What is the difference in efficiency between solution 2 and the solution 1? Is it a memory improvement?

What is happening on line 2, when we call Object.create using the userFunctionStore? In terms of the prototype chain?

Do we search first directly in the object for a key, and then search up the prototype chain?

How is the `user1` Object referencing the `userFunctionStore` object in memory?

What does dunder mean?

So is it correct to say than when we invoke `Object.create` and pass in an object, we create a reference in memory to the argument Object? And then when try to access a key on the created object, for example `user1.increment()`, we first search within the user1 object, and then search up the prototype chain?

And that the efficiency benefit of this is a reduction in memory useage as we are not repeatedly storing the same functions, but just referencing its fvalue in memory?

Does ES6 class notation use the prototype chain?

---
