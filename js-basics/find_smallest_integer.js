// find the smallest integer in an array
function findSmallestInt(arr) {
  return Math.min(...arr);
}

// tests
console.log(findSmallestInt([3, 44, 7, 6, 52, 101, -4, 77])); // expect -4
console.log(findSmallestInt([34, 15, 88, 2])); // expect 2
