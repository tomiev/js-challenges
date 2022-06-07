/* Complete the solution so that it splits the string into pairs of two characters.
If the string contains an odd number of characters then it should replace the
missing second character of the final pair with an underscore ('_').
Example: 'abc' =>  ['ab', 'c_']. */

function solution(string) {
  const regexp = /.{2}/gi;

  /* Add _ to string and split string into pairs of 2 OR return [] if string is empty */
  return (`${string}_`).match(regexp) || [];
}

/* Tests */
console.log(solution('abcdefg')); /* Expect [ 'ab', 'cd', 'ef', 'g_' ] */
console.log(solution('')); /* Expect [] */
