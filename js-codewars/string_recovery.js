/* Instructions: https://www.codewars.com/kata/53f40dff5f9d31b813000774/train/javascript */

function recoverSecret(triplets) {
  /* Get all unique letters */
  const letters = [];
  triplets.forEach((triplet) => {
    const uniqueLetters = (triplet.filter((letter) => letters.includes(letter) === false));
    uniqueLetters.forEach((letter) => {
      // implement sorting here??? instead of push, splice? how to get it to get them all in order? can't just put each element one behind.
      letters.push(letter);
    });
  });

  /* Iterate over each triplet again? */
  /* Implement sorting algorithm on unique letters */
}

// use compare function
console.log(recoverSecret([['a', 'b', 'c'], ['b', 'c', 'd']]));
