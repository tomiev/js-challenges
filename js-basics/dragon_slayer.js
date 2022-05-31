// TASK: Calculate whether a dragon slayer has enough bullets to kill all the dragons.
// Two bullets are required to kill a dragon.

function enoughBullets(bullets, dragons) {
  return (bullets / 2) >= dragons;
}

// Tests
console.log(enoughBullets(20, 10)); // expect true
console.log(enoughBullets(400, 250)); // expect false
