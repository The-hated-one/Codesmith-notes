// const flattenDeep = (array) => {
//   let flattened = []; first;

//   while (array.length > 0) {
//     first = array[0];

//     if  (Array.isArray(first)) {

//     } else {
//       flattened.push(first);
//       array.splice(0, 1);
//     }
//   }

// }

function flattenDeep(arr) {
  var result = [];
  var stack = arr, first;

  while (stack.length > 0) {
    console.log('inside while');
    first = stack[0];
    console.log('stack', stack);
    console.log('first', first);


    if (Array.isArray(first)) {
      // Replace the nested array with its items
      console.log('inside is Array');
      Array.prototype.splice.apply(stack, [0, 1].concat(first));
    } else {
      console.log('inside just and splice');
      result.push(first);
      // Delete the first item
      stack.splice(0, 1);
    }
    console.log('stack after', stack);
    console.log('first after', first);
    console.log('result after', result)
  }

  return result;
}

let arr = [1, [2,3], [[2,[3,5]]],2];
let arr2 = [1, 2, [3, 4]];

let result = flattenDeep(arr2);

console.log('result', result);