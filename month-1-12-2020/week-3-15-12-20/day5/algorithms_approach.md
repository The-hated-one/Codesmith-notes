# Algorithms approach lecture

## Fibonacci

Dynamic programming, you take a problem, you break it down into smaller problems.

## Linear time fib solution

```JavaScript
function nthFibonacci(num) {
  if (num === 0) return 0;

  let twoBack = 0;
  let oneBack = 1;

  for (let i = 2; i < num; i++) {
    const currNum = twoBack + oneBack;
    twoBack = oneBack;
    oneBack = currNum;
  }
  return twoBack + oneBack;
}
```

## Sorting

### Bubble Sort

T: O(n^2) S: 0(1)

Optimisation, after each loop, you can decrease the array that you are iterating over each time.

### Insertion Sort

T: O(n^2) S: 0(1)

### Merge Sort

T: O(nlogn) S: O(n)

## Coinsum

For 1,2 and 5p

             |-----------------------|
             | amounts               |
|------------|---|---|---|---|---|---|
| coins   ---| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8  | 9  |
|------------|---|---|---|---|---|---|
| []      ---| 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0  | 0  |
|------------|---|---|---|---|---|---|
| [1]     ---| 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1  | 1  |
|------------|---|---|---|---|---|---|
| [1,2]   ---| 1 | 1 | 2 | 2 | 3 | 3 | 4 | 4 | 5  | 5  |
|------------|---|---|---|---|---|---|
| [1,2,3] ---| 1 | 1 | 2 | 3 | 4 | 5 | 7 | 8 | 10 | 12 |
|------------|---|---|---|---|---|---|
| [1,2,3,5] -| 1 | 1 | 2 | 2 | 3 | 4 |
|------------|---|---|---|---|---|---|

1,1,1,1,1,1
2,2,2,
2,1,1,1,1
2,2,1,1



1 -> 0 [1,1,1,1]
2 -> 1 [1,1,2,2,3,3]
5 -> 3 [1,1,2,2,3,4]

O()

## nPaths

| 1 | 1 |    |      |       |
| 1 | 2 | 6  |      |       |
|   | 6 | 12 |      |       |
|   |   |    |  184 |       |
|   |   |    |      |  8512 |


| 1 | 1 |
| 1 | 2 |

| 1 | 1 | 1 | 
| 1 | 2 | 3 | 

| 1 |  1  | 1 | 
| 1 |  2  | 3 | 
| 1 |  3  | 6 | 


| 1 |   |   | 
|   |   |   | 
|   |   |   | 




### Questions

What is the word for a tree that converges again at the bottom.
