/**
  Greed is a game where players throw five six-sided f to score points.
  Scoring rules are as follows:
    Three 1's => +1000 points
    Three 6's =>  +600 points
    Three 5's =>  +500 points
    Three 4's =>  +400 points
    Three 3's =>  +300 points
    Three 2's =>  +200 points
    One   1   =>  +100 points
    One   5   =>   +50 points
    All others => 0 points
  Write a function calculating the score from an array of 5 dice throws.
*/

function greed(throws) {
  let score = 0;
  /** Count the ones and fives */
  let ones = throws.filter((x) => x === 1).length;
  let fives = throws.filter((x) => x === 5).length;

  if (ones >= 3) {
    score += 1000;
    /** Subtract from the ones counter, leaving only the leftovers */
    ones -= 3;
  } else if (fives >= 3) {
    score += 500;
    /** Subtract from the fives counter, leaving only the leftovers */
    fives -= 3;
  } else if (throws.filter((x) => x === 2).length >= 3) {
    score += 200;
  } else if (throws.filter((x) => x === 3).length >= 3) {
    score += 300;
  } else if (throws.filter((x) => x === 4).length >= 3) {
    score += 400;
  } else if (throws.filter((x) => x === 6).length >= 3) {
    score += 600;
  }

  /** Add the scores of the leftover ones and fives */
  score += fives * 50 + ones * 100;
  return score;
}

/** Tests */
console.log(greed([5, 1, 3, 4, 1])); /** Expect 250 */
console.log(greed([1, 1, 1, 3, 1])); /** Expect 1100 */
