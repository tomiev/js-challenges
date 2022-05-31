// find the smallest integer in an array
function findSmallestInt(arr) {
  return Math.min(...arr);
}

// tests
const numbers = [3, 44, 7, 6, 52, 101, -4, 77];
console.log(findSmallestInt(numbers));

const numbers2 = [34, 15, 88, 2];
console.log(findSmallestInt(numbers2));
