// calculate product of multiplying all values of an array in order
function multiplyArrayValues(arr) {
  return arr.reduce((a, b) => a * b, 1);
}

// test
console.log(multiplyArrayValues([1, 2, 3, 4, 5])); // expected to output 120
console.log(multiplyArrayValues([2, 3, 4, 5, -6])); // expected to output -720
