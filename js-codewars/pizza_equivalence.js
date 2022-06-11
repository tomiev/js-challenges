/* Instructions: https://www.codewars.com/kata/599bb194b7a047b04d000077/train/javascript */

/* Calculates the area of a circle */
function calculateArea(radius) {
  return Math.PI * radius * radius;
}

/* Calculates how many pizzas (and slices) of the smaller pizza could fit into the larger pizza */
function howManyPizzas(inches) {
  const area1 = calculateArea(inches / 2);
  const area2 = calculateArea(4);
  const numberOfPizzas = Math.floor(area1 / area2);
  const numberOfSlices = Math.round(((area1 / area2) % 1) * 8);
  return `pizzas: ${numberOfPizzas}, slices: ${numberOfSlices}`;
}

// Test
console.log(howManyPizzas(12)); /* Expect 'pizzas: 2, slices: 2' */
