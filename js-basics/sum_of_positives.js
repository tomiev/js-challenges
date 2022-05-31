// TASK: Return the sum of all the positive numbers in an array.
// If there is nothing to sum, the sum should default to 0.

function sumPositives(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

// Test
console.log(sumPositives([1, 5, 6, -2, -3, 1])) // expect 13
console.log(sumPositives([3, 5, -10, -2, -3, 2])) // expect 10
console.log(sumPositives([-3, -5, -10, -2, -3, -2])) // expect 0
