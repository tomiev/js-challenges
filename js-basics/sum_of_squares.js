/* Complete the square sum function so that it squares each number passed into
it and then sums the results together. */

function squareSum(nums) {
  let total = 0;
  nums.forEach(num => (total += num * num));
  return total;
};

// Test
console.log(squareSum([1, 2, 3])); // expect 14
console.log(squareSum([-1, 2, 4])); // expect 21
