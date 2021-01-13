# Unit 3: Algorithms - Time/Space Complexity & Big O Notation

## What is an algorithm?

- An algorithm is a structured step by step set of instructions that provide a solution to a problem.
- Most the business logic in an app is algorithmic in nature.
- Example business logic:
  - Image processing
  - Visual/audio recognition
  - File compression
  - Recommendations for users to connect to on LinkedIn, Facebook
  - Using financial models to inform hedge fund trading
  - Targeted advertising

## Waht is time complexity?

- As developers we need a language of efficiency.
- The more computational steps an algorithm performs, the longer it takes to complete.
- Big O notation describes the relationship between the size of an algorithm's input and the number of computational steps it takes for the algorithm to complete.
- O(n) means proportional to input lenght.
- O(n^2) means proportional to input length.

E.g. Take an array and find if there is a name called 'Jake' in it.
['Jake', 'Paul', 'Katherine', ..., 'Hugo']

- Best case scenario -> O(1)
- Worst case scenario -> O(n) -> Big O notation.

We think worst case scenario, as we must be prepared as developers for the worst case.

## Interpretation of Big O notation

- O(n) linear time complexity 
  - Likely most common time
  - Example finding the mean of an array of numbers

- O(n^2) -> quadratic time complexity
  - Often a brute force solution
  - Example: Slection sort

- O(1) - constant time complexity
  - Example: Testing to see if a key is in an object
  - Example: Finding the man of a pre-sorted array


### O(n) example

```JavaScript
// Example 1
function mean(array) {  // O(n)
  let total = 0;
  // add all elements in the array together
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  /// divide by number of elements
  return total / array.length;
}

// Example 2
function mean(array) {  // O(n) -> technically it is exactly O(n - 1) which simplifies down to O(n)
  return array.reduce((acc, curr) => acc + curr) / array.length;
}
```

### O(n^2) example

```JavaScript
// Given an array of numbers and a target, are there two numbers in the array that sum up to the target
const twoSum = (arr, target) => { // O(n^2) // Space Complexity O(1)
  for (let i = 0; i < arr.length; i ++) {
    for (let j = i + 1; j < arr.elngth; j ++) {
      if (arr[i] + arr[j] === target) return true;
    }
  }
  return false
}

const twoSum2 = (arr, target) => { // Optimised to O(n) // Space complexity now O(n)
  const cache = {};
  for (let i = 0; i < arr.length; i += 1) {
    const complement = target - arr[i];
    if (cache[complement]) {
      return true;
    } else {
      cach[arr[i]] = true;
    }
  }
  return false
}
```
## Big O (Further Breakdown)

- Constant      O(1)        Key lookup
- Logarithmic   O(log n)    Balanced Binary tree search
- Linear        O(n)        1 level looping
- Quasilinear   O(n log n)  Good sorting (e.g. merge sort)
- Quadratic     O(n^2)      2 nested loops (e.g. selection sort)
- Exponential   O(c^n)      Recursive Backtracking: Subsets
- Factorial     O(n!)       Generating ations

## Logarithm O(log n)

- Binary search/ Binary search tree.

## Why care?

Computers have limited resources (space and processing power).
Writing algorithms with better time complexity saves time!

Time = Performance, efficiency, money

## Big O Generalizes

Differences in time complexity matters only at big numbers for n.

 Compare n to n^2 when n = 1000

 1000 => 1000       | O(n)
 1000^2 => 1000,000 | O(n^2)

 Only the fastest growing term amtters for complexity.
 Constants and coefficients are also dropped.

## Space Complexity

- O(1) constant space complexity

## Considering Tradeoffs

- Optimizing Solutions
  - Often when optimizing an algorithm you will face a tadeoff
    - More space -> less time vs less sapce -> more time

## Don't guess

- Don't memorize code shapes

if you understand time complexity behaviour, you will understand how to appraoch algorithms quicker

Focus on understanding WHY an algorithm has a certain time complexity

## Summary

- An algorithm is a set of instructions that provides an answer to a problem.
- Time-complexity describes the rate at which the number of computations grows as the input grows.
- Big O Notation provides a way to represent time-complexity.
- 

### Questions

I heard that sometimes we should think as developers, not about worst case, but average case. X

If I am in an interview and I know how to mathematically calculate the exact value of O(n) before simplifying it down. X

It is a waste of time to simplify it down in an interview.


### To research

Divide and conquer strategy.
