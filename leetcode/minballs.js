// var minimumSize = function(nums, maxOperations) {
//   for (let i = 0; i < maxOperations; i++) {
//       let max = Math.max(...nums);
//       let index = nums.indexOf(max);
//       let num1;
//       let num2;
//       if (max % 2 === 0) {
//           num1 = max / 2;
//           num2 = max / 2;
//       } else {
//           num1 = (max + 1) / 2
//           num2 = (max - 1) / 2
//       }
//       nums[index] = num1;
//       nums.push(num2);
//   }
//   return Math.max(...nums)
// };
// var minimumSize = function(nums, maxOperations) {
//   for (let i = 0; i < maxOperations; i++) {
//       console.log('------ inside loop ----- operation: ', i + 1);
//       let max = Math.max(...nums);
//       let index = nums.indexOf(max);
//       console.log('nums', nums);
//       console.log('max', max);
//       console.log('index', index);
//       let num1;
//       let num2;
//       if (max % 2 === 0) {
//           console.log('max even')
//           num1 = max / 2;
//           num2 = max / 2;
//       } else {
//           console.log('max odd')
//           num1 = (max + 3) / 2
//           num2 = (max - 3) / 2
//       }
//       console.log('num1', num1);
//       console.log('num2', num2);
//       nums[index] = num1;
//       nums.push(num2);
//       console.log('------new nums-----', nums)
//   }
//   console.log('------finished------', Math.max(...nums))
//   return Math.max(...nums)
// };
var minimumSize = function(nums, maxOperations) {
  for (let i = 0; i < maxOperations; i++) {
      let iterationsLeft = maxOperations - i;
      // console.log('iterationsLeft', iterationsLeft);
      let max = Math.max(...nums);
      let index = nums.indexOf(max);
      let num1;
      let num2;
      console.log('max', max);
      if (max == 3) {
        console.log('max is 3')
          num1 = 2;
          num2 = 1;
      } else if (max === 1) {
        console.log('max is 1')
          return 1;
      } 
      else if (max % 2 === 0) {
        console.log('max is even')
          num1 = max / 2;
          num2 = max / 2;
      } else if (iterationsLeft > 1) {
        console.log('max is odd 1')
          num1 = (max + 3) / 2
          num2 = (max - 3) / 2
      } else if (iterationsLeft === 1) {
        console.log('max is odd 2')
          console.log('in here');
          num1 = (max + 1) / 2
          num2 = (max - 1) / 2
      }
      console.log('num1', num1);
      console.log('num2', num2);
      nums[index] = num1;
      nums.push(num2);
  }
  return Math.max(...nums)
};



// let result1 = minimumSize([9], 2)
// let result2 = minimumSize([2,4,8,2], 4)
// let result3 = minimumSize([7,17], 2)
// let result4 = minimumSize([3, 3], 2)
// let result5 = minimumSize([1, 1,1 ,1 ,1 ,1 ,1], 20)
// let result6 = minimumSize([0], 20)
let result7 = minimumSize([431,922,158,60,192,14,788,146,788,775,772,792,68,143,376,375,877,516,595,82,56,704,160,403,713,504,67,332,26], 80)

// console.log("[9], 2 -> 3: ", result1)
// console.log("[2,4,8,2], 4 -> 2: ", result2)
// console.log("[7,17], 2 -> 7: ", result3)
// console.log("[3, 3], 2 -> 2: ", result4)
// console.log("[1, ,1 ,1 ,1 ,1 ,1], 20 -> 1: ", result5)
// console.log("[0], 20 -> 0: ", result6)
console.log("result7 -> 129: ", result7)

// https://www.youtube.com/watch?v=5ET1d6PfbNU&feature=emb_logo
// https://leetcode.com/contest/weekly-contest-228/problems/minimum-limit-of-balls-in-a-bag/