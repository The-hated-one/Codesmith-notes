let opposite = {
  '0': '1',
  '1': '0'
}

// var minOperations = function(s) {
//   const stack = [s[0]];
//   let operations = 0;
//   for (let i = 1; i < s.length; i++) {
//       const x = s[i]
//       if (opposite[x] === stack.pop()) {
//           // all good
//       } else {
//           operations++;
//       }
//       stack.push(x)
//   }
//   return operations
// };

// var minOperations = function(s) {
//   const stack = [s[0]];
//   let operations = 0;
//   for (let i = 1; i < s.length; i++) {
//     console.log('inside loop');
//     const lastEl = stack[stack.length - 1];
//     const curChar = s[i];
//     console.log('lastEl', lastEl);
//     console.log('curChar', curChar)
//     console.log('stack', stack);
//     if (opposite[lastEl] !== curChar) {
//       stack.push(opposite[curChar]);
//       operations++
//       console.log('increase operations: ', operations);
//     } else {
//       console.log('all good');
//       stack.push(curChar);
//     }
//   }
//   console.log('====== FINISHED ======', operations)
//   return operations
// };
// var minOperations = function(s) {
//   const stack = [s[0]];
//   let operations = 0;
//   for (let i = 1; i < s.length; i++) {
//     const lastEl = stack[stack.length - 1];
//     const curChar = s[i];
//     if (opposite[lastEl] !== curChar) {
//       stack.push(opposite[curChar]);
//       operations++
//     } else {
//       stack.push(curChar);
//     }
//   }
//   return operations
// };

var minOperations = function(s) {
  let string1 = ''
  let string2 = ''
  let operations1 = 0;
  let operations2 = 0;
  for (let i = 0; i < s.length; i++) {
     if (i % 2 === 0) {
         string1 += '0';
         string2 += '1';
     } else {
         string1 += '1';
         string2 += '0';
     }
     if (s[i] !== string1[i]) operations1++;
     if (s[i] !== string2[i]) operations2++;
  }
  return Math.min(operations1, operations2)
};

let result1 = minOperations("0100")
let result2 = minOperations("10")
let result3 = minOperations("1111")
let result4 = minOperations("10010100");

console.log('0100 -> 1: ', result1)
console.log('10 -> 0: ', result2)
console.log('1111 -> 2: ', result3)
console.log('10010100 -> 3: ', result4)


"01010101"
"10010100"  // INPUT
"10101010"
