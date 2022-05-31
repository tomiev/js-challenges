// TASK: Write a program that finds the summation of every number from 1 to num.
// The number will always be a positive integer greater than 0.

function sumToNum(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  };

  return sum;
}

// Alternate solution
// const sumToNum = n => n * (n + 1) / 2;

// Test
console.log(sumToNum(5)); // expect 15
console.log(sumToNum(6)); // expect 21
