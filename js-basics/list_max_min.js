// TASK: make two functions which receives an array of integers as input and
// returns, respectively, the largest and lowest numbers in that list.

const min = arr => Math.min(...arr);
const max = arr => Math.max(...arr);

// Test
console.log(min([1, 4, 400, -7, 82])); // expect -7
console.log(min([11, 4, 400, 82])); // expect 4
