// Return the number of times 'true' appears in an array

// this solution might be more readable:
// function countInArray(arr) {
//   let counter = 0
//   arr.forEach((element) => element === true ? counter += 1 : counter += 0);
//   return counter;
// }

// but this solution is more fun
const countInArray = arr => arr.filter(Boolean).length;

// Test
console.log(countInArray([true, false, true, true, false])) // expect 3
console.log(countInArray([true, true, true, true, false])) // expect 4
