/* Return the sum of all the multiples of 3 or 5 below the number passed in.
If the number is negative, return 0.
If the number is a multiple of both 3 and 5, only count it once. */

function solution(number) {
  let sum = 0;

  /* Iterates from 1 to the integer below 'number' */
  for (let i = 3; i < number; i += 1) {
    if (i % 5 === 0 || i % 3 === 0) {
      sum += i;
    }
  }
  return sum;
}

/* Tests */
console.log(solution(10)); /* Expect 23 */
console.log(solution(-10)); /* Expect 0 */
console.log(solution(5)); /* Expect 3 */
