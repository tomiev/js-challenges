/* Write a function that returns the positions and the values of the "peaks" (or
local maxima) of a numeric array. For example, the array arr = [0, 1, 2, 5, 1, 0]
has a peak at position 3 with a value of 5 (since arr[3] equals 5). The output
will be returned as an object with two properties: pos and peaks. Both of these
properties should be arrays. If there is no peak in the given array, then the
output should be {pos: [], peaks: []}. Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3])
should return {pos: [3, 7], peaks: [6, 3]}. Plateaus can qualify as peaks */

function pickPeaks(arr) {
  const output = { pos: [], peaks: [] };

  for (let i = 1; i < arr.length - 1; i += 1) {
    const num = arr[i];
    /* This finds non-plateau peaks */
    if (num > arr[i - 1] && num > arr[i + 1]) {
      output.pos.push(i);
      output.peaks.push(num);
    /* ...and this finds plateau peaks */
    } else if (num > arr[i - 1] && num === arr[i + 1]) {
      let nextDiff;

      for (let index = i; index < arr.length; index += 1) {
        /* Loop ends when it finds value that is different to num; AKA the end of the plateau. */
        if (arr[index] !== num) {
          nextDiff = arr[index];
          break;
        }
      }
      /* If num > nextDiff, num is a peak */
      if (num > nextDiff) {
        output.pos.push(i);
        output.peaks.push(num);
      }
    }
  }

  return output;
}

/* Should output { pos: [3, 7, 10], peaks: [6, 3, 2]} */
console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1]));
/* Should output { pos: [2], peaks: [3]} */
// console.log(pickPeaks([2, 1, 3, 1, 2, 2, 2, 2]));

// NOTE: Rename 'Peaks' key to 'Height'
