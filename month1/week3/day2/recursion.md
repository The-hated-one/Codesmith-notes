# Recursion

## Roadmap

- What is recursion?
- Why use recursion?
- Types of recursion.

## What is recursion?

It is a a function that calls itself within its own definition.

## Consider the following function

```JavaScript
// Non-termination function
function sumNaturalsBelow(n) {
  return n + sumNaturalsBelow(n - 1);
}
```

There is no base case here, so it will have a `stack overflow`.

- Stack overflow -> occurs when the call stack pointer exceeds the stack bound.

## Recursion, like a for/while loop, requires termination conditions

```JavaScript
function sumNaturalsBelow(n) {
  if (n <= 0) return 0;
  return n + sumNaturalsBelow(n - 1);
}
```

## Why use recursion

Recursive functions are frequently more readable, maintainable, and easier to understand

```JavaScript
const contains = (LLNode, val) => {
  let current = LLNode;
  while (current)  {
    if (current.value === val) return true;
    current = current.next;
  }
  return false;
}
contains(LLHead, 6);
```

vs with recursion:

```JavaScript
const contains = (LLNode, val) => {
  if (!LLNode) return false;
  else if (LLNode.value === val) return true;
  else return contains(LLNode.next, val);
}
```

Recursion typically is fewer lines of code. Can be a leser time complexity.

### Why are recursive algorithms easier to understand?

- Non-recursive functions tend to describe *how* to get to a solution.
- Recursive solutions describe *what* the solution is.
- Writing recursive functions often forces you to write *declarative* code instead of *imperative* code.

- Imperative code is where you explicity spell out each step of how you want something done.
- Declarative code is where you merely say what it is that you want done.

## Types of Recursion

### Multiple ways of solving factorial

factorail(5) => 5 * 4 * 3 * 2 * 1 => 120

#### Factorial: Option 1

```JavaScript
const factorial = n => {
  let product = 1;
  while (n) {
    product *= n;
    n -= 1;
  }
  return product;
}
factorial(5);
```

#### Factorial: Option 2

```JavaScript
const factorial = n => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
factorial(5);
```

#### Factorial: Option 3

```JavaScript
const factorial = (n, product = 1) => {
  if (n === 0) return product;
  else return factorial(n - 1, product * n);
}
factorial(5);
```

### Lets compare them

- How is option #1 different from option #2 and #3?
  - #1 is iterative. #2 and #3 are both recursive.

- How is option 1 and 2 similar.
  - They are both iterative. 

- How are option 1 and 2 different
  - Option 2 built the result on its way down the callstack (when you pop off the callstack).
  - Option 3 built the result on the way up the callstack.

- How is option 3 similar to option 1:
  - Both of them build towards the solution with each call.

So you could argue option 1 and 3 are more similar than option 2 and 3.

### Linear Recursion -> Option 2

Time complexity: O(n)
Space complexity: O(n)

```JavaScript
const factorial = n => {
  if (n === 0) return 1;
  else return n * factorial(n - 1)
}
```

``` // THIS NEEDS SORTING OUT
(factorial 3)
(* 3 (factorial 2))
(* 2 (* 3 (factorial 2)))
(* 1 (* 2 (* 3 (factorial 2))))
(* 0 (* 1 (* 2 (* 3 (factorial 2)))))
(* 1 (* 2 (* 3 (factorial 2))))
(* 2 (* 3 (factorial 2)))
(* 3 (factorial 2))
(factorial 3)

(* 6 (* 5 24))
(* 6 120)
720
```

Call frames contribute to space complexity.
Thats why this is space complexity: O(n).

This is for option 2.

### Iterative Recursion (a.k.a tail call recursion) -> Option 3

Time complexity: O(n)
Space complexity: O(1)

It resuses/recycles the same `call frame`.

```JavaScript
const factorial = (n, product = 1) => {
  if (n === 0) return product;
  else return factorial(n - 1, product * n);
}
factorial(5);
```

```
(factorial 6)
=> (factorial 5, 6)
=> (factorial 4, 30)
=> (factorial 3, 120)
=> (factorial 2, 360)
=> (factorial 1, 720)
=> (factorial 0, 720)
=> 720
```

### Ohter types of recursion

#### Mutual Recursion

```JavaScript
function isEven(n) {
  if (n === 0) return false;
  else return isOdd(n - 1);
}

function isOdd(n) {
  if (n === 0) return false;
  else return isEven(n - 1);
}
```

E.g. `JSON Parser!`

#### Tree recursion (a.k.a multiple recursion)

Time Complexity: O(2^n);

Fibonacci numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...

```JavaScript
function fib(n) {
  if (n === 0) return 0;
  else if (n === 1) return 1;
  else return fib(n - 1) + fib(n - 2)
}
```

```
fib 5 -> fib 3 -> fib 1 -> 1
      |        |
      |         -> fib 2 -> fib 0 -> 0
      |                  |
      |                   -> fib 1 -> 1
      |
       -> fib 4 -> fib 2 -> fib 0 -> 0
                |
                -> fib 3 -> fib 1 -> 1
                         |
                          -> fib 2 -> fib 0 -> 0
                                   |
                                    -> fib 1 -> 1
```

This can be optimised using memoization.

### Note on diagramming out recursive functions

For each execution context, also keep track of the `callsite` and the `return` statement.


```JavaScript
const factorial = n => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
factorial(5);
```

|---------------------------------------------|
| Local Execution Context: factorial(5)       |
|-------------------|-------------------------|
|                   | Local Memory            |
|                   |-------------------------|
|                   | n = 5                   |
|                   |                         |
|                   |                         |
|-------------------|-------------------------|
| Call site: global | return 5 * factorial(4) |
|-------------------|-------------------------|

|---------------------------------------------------|
| Local Execution Context: factorial(4)             |
|-------------------------|-------------------------|
|                         | Local Memory            |
|                         |-------------------------|
|                         | n = 4                   |
|                         |                         |
|                         |                         |
|-------------------------|-------------------------|
| Call site: factorial(5) | return 4 * factorial(3) |
|-------------------------|-------------------------|

And so on etc....

### Questions

Why would it be typically better time complexity? -> two sum. Are there any two numbers in an array that we are looking for?

Is there any combination of any of the numbers in the array that add up to the sum. For this question, the iterative attack is almost always has higher time complexity than the recursive approach.

### To research

What is the meaning of imperative and declarative?