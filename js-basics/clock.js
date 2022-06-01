/* Write a function which returns the time since midnight in seconds,
given the current hour, minute, and second. */

function msSinceMidnight(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000;
}

// Test
console.log(msSinceMidnight(1, 1, 2)); // expect 3662000
console.log(msSinceMidnight(0, 0, 4)); // expect 4000
