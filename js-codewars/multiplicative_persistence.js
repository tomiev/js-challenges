/** TASK: Write a function, persistence, that takes in a positive parameter, num,
and returns its multiplicative persistence, which is the number of times you must
multiply the digits in num until you reach a single digit.

Example: 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit */

function persistence(num) {
  let counter = 0;
  let currentVal = num;
  let nums = String(num).split('');

  /** Loop stops when product of nums is a single digit */
  while (currentVal >= 10) {
    currentVal = nums.reduce((a, b) => a * b);
    nums = String(currentVal).split('');
    counter += 1;
  }

  return counter;
}

/** Test */
console.log(persistence(39)); /** Expect 3 */
console.log(persistence(999)); /** Expect 4 */
