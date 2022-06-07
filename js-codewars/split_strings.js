/* Complete the solution so that it splits the string into pairs of two characters.
If the string contains an odd number of characters then it should replace the
missing second character of the final pair with an underscore ('_').
Example: 'abc' =>  ['ab', 'c_']. */

function solution(string) {
  const regexp = /[A-Z]{2}/gi;

  /* Returns empty array if string is empty */
  if (string === '') {
    return [];
  }

  /* Sorts string into pairs of two letters */
  const pairs = string.match(regexp);

  /* If odd number of letters in string, pairs final letter with an _ and pushes to array */
  if (string.length % 2 !== 0) {
    pairs.push(`${string[string.length - 1]}_`);
  }

  return pairs;
}

/* Tests */
console.log(solution('abcdefg')); /* Expect [ ab, cd, ef, g_ ] */
console.log(solution('')); /* Expect [] */
