// TASK: check whether the provided array contains the value.

checkForValue = (arr, val) => arr.includes(val);

// Test
console.log(checkForValue([1, 3, 4, 5], 3)); // expect true
console.log(checkForValue([1, 3, 4, 5], 2)); // expect false
