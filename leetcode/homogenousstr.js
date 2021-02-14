// var countHomogenous = function(s) {
//   const cache = {};
//   let count = 0;
//   let stack = [];
//   for (let i = 0; i < s.length; i++) {
//       let char = s[i];
//       let lastEl = stack[stack.length - 1];
//       if (stack.length === 0 || lastEl === char) {
//           stack.push(char);
//       }
//       if (lastEl !== char) {
//           const n = stack.length;
//           const increment = (n * (n + 1)) / 2
//           count += increment;
//           stack = [];
//       }
      
//   }
//   if (stack.length > 0) {
//       const n = stack.length;
//       const increment = (n * (n + 1)) / 2
//       count += increment;
//       stack = [];
//   }
//   return count
// };
// var countHomogenous = function(s) {
//   const cache = {};
//   let count = 0;
//   let stack = [];
//   for (let i = 0; i < s.length; i++) {
//       console.log('------ inside loop ------');
//       let char = s[i];
//       let lastEl = stack[stack.length - 1];
//       console.log('char: ------>', char);
//       console.log('lastEl', lastEl);
//       console.log('stack', stack);
//       if (stack.length === 0 || lastEl === char) {
//           console.log('dont increment, just push');
//       } else if (lastEl !== char) {
//           console.log('increment');
//           const n = stack.length;
//           const increment = (n * (n + 1)) / 2
//           console.log('n', n)
//           console.log('increment', increment);
//           count += increment;
//           console.log('count new: ', count)
//           stack = [];
//       }
//       stack.push(char);
//       console.log('new stack', stack);
//   }
//   if (stack.length > 0) {
//       const n = stack.length;
//       const increment = (n * (n + 1)) / 2
//       count += increment;
//       stack = [];
//   }
//   return count
// };
var countHomogenous = function(s) {
  const cache = {};
  let count = 0;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
      let char = s[i];
      let lastEl = stack[stack.length - 1];
      if (stack.length === 0 || lastEl === char) {
      } else if (lastEl !== char) {
          const n = stack.length;
          const increment = (n * (n + 1)) / 2;
          count += increment;
          stack = [];
      }
      stack.push(char);
  }
  if (stack.length > 0) {
      const n = stack.length;
      const increment = (n * (n + 1)) / 2
      count += increment;
      stack = [];
  }
  return count
};


let result1 = countHomogenous("abbcccaa")
let result2 = countHomogenous("xy")
let result3 = countHomogenous("zzzzz")

console.log('abbcccaa -> 13: ', result1)
console.log('xy -> 2: ', result2)
console.log('zzzzz -> 15: ', result3)