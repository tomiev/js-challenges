/* TASK: A child is playing with a ball on the nth floor of a tall building.
The height of this floor, h, is known. He drops the ball out of the window.
The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).
His mother looks out of a window 1.5 meters from the ground.
How many times will the mother see the ball pass in front of her window (including
when it's falling AND bouncing?

Three conditions must be met for a valid experiment:
1. Float parameter "h" in meters must be greater than 0
2. Float parameter "bounce" must be greater than 0 and less than 1
3. Float parameter "window" must be less than h.
If all three conditions above are fulfilled, return a positive integer, otherwise return -1. */

function bouncingBall(h, bounce, window) {
  let bounceHeight = bounce * h;
  let sightings = 1;

  /* Return -1 if paramaters are invalid */
  if (bounce >= 1 || bounce < 0 || h <= window) {
    return -1;
  }

  /* Count sightings until ball doesn't bounce up to window height */
  while (bounceHeight > window) {
    sightings += 2;
    bounceHeight *= bounce;
  }
  return sightings;
}

/* Test */
console.log(bouncingBall(3, 0.67, 1.5)); /* Expect 3 */
console.log(bouncingBall(3, 0.99, 1.5)); /* Expect 137 */
console.log(bouncingBall(3, 1, 1.5)); /* Expect -1 */
