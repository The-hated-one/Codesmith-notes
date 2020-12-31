# Hack Hour Strategy: Auxiliary Objects

- Discuss strategies for approaching algorithm challenges and spot when we might want to use an auxiliary object.
- See several challenges related to auxiliary objects.

## What/why auxiliary Objects

This extra data structure can often be used to improve the time complexity of our algorithm.

Using an auxiliary object will often result in worse space complexity as the object takes up extra space.

But space is usually cheaper than time.

## removeDup

removeDuplicates([3,1,2,3,9,1]) -> [3,1,2,9];

```JavaScript
function removeDup1(arr) {
  return [...new Set(arr)];
}
```

I wa

## Union

Merge unique values from the array.

O(n^2)
```JavaScript
function union1(...arrays) {
  const output = [];

  for (let array of arrays) {
    for (let element of array) {
      if(!output.includes(element)) {
        output.push(element);
      }
    }
  }
}

function union2(...arrays) {
  const output = [];

  for (let array of arrays) {
    for (let element of array) {
      output.push(element);
    }
  }
  return [... new Set(output)];
}

function union2a(...arrys) {
  return [
    ... new Set(
      Array.from(arguments)
           .reduce((unionSet, eachArray) => [... unionedSet, ..eachArray], [])
    )
  ]
}
```

## maxChar

maxChar('good morning') -> 'o'
maxChar('abccb11') -> 'b' 

```JavaScript
function maxChar1(str) { // maxChar1('abccb11') -> 1 -> FAIL
  const countObj = {};

  for (let char of str) {
    if (countObj[char] === undefined) countObj[char] = 0;
    countObj[char]++;
  }

  let maxCharCandidate;
  let maxFreq = 0;

  for (let [char, freq] of Object.entries(countObj)) {
    if (maxCharCandidate === undefined || freq > maxFreq) {
      maxCharCandidate = char;
      maxFreq = freq;
    }
  }
  return maxCharCandidate;
}

function maxChar2(str) {
  // start an empty map
  const charMap = new Map();

  for (let char of str) {
    if (!charMap.has(char)) charMap.set(char, 0);
    charMap.set(char, charMap.get(char) + 1);
  }

  let maxCharCandidate;
  let maxFreq = 0;

  for (let [char, freq] of charMap.entries()) { // THIS BIT IS BROKEN
    if (maxCharCandidate === undefined || freq > maxFreq) {
      maxCharCandidate = char;
      maxFreq = freq;
    }
  }
  return maxCharCandidate;
}
```

## twoSum

return true if a pair of ints in the array sum to the target.

twoSum([2, 4, 5], 9) -> true
twoSum([2, 4, 5], 8) -> false
twoSum([5, -1, -2, 3], 1) -> true

```JavaScript
function twoSum1(arr, target) { // O(n^2)
  // loop arr i 
    // loop arr j
      // check if arr i + arr j === target
      // if so return true
  // return false
}

function twoSum2(arr, target) { // O(n)
  const diffs = new Set()

  for (let element of arr) {
    if (diffs.has(element)) return true;
    else diffs.add(target - element); 
  }

  return false;
}
```
