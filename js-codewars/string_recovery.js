/* Instructions: https://www.codewars.com/kata/53f40dff5f9d31b813000774/train/javascript */

function recoverSecret(triplets) {
  /* Get all unique letters */
  const letters = [];
  triplets.forEach((triplet) => {
    const uniqueLetters = (triplet.filter((letter) => letters.includes(letter) === false));
    uniqueLetters.forEach((letter) => {
      letters.push(letter);
    });
  });

  /* Implement sorting algorithm on unique letters */
  const sorted = letters.sort(function(a, b) => );
  return sorted;
}

// use compare function
console.log(recoverSecret([['a', 'b', 'c'], ['b', 'c', 'd']]));
