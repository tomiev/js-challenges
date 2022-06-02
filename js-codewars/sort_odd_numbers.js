/* You will be given an array of numbers. You have to sort the odd numbers in
ascending order while leaving the even numbers at their original positions. */

function sortArray(array) {
  // Make sortedArray of same length as original array
  const originalArray = array;
  const sortedArray = [];
  sortedArray.length = originalArray.length;

  /* Put evens in sortedArray at same index as original array */
  originalArray.forEach((number) => {
    const index = originalArray.indexOf(number);
    if (number % 2 === 0) {
      sortedArray[index] = number;
    }
  });

  /* Remove evens from originalArray */
  originalArray.forEach((number) => {
    const index = originalArray.indexOf(number);
    if (number % 2 === 0) {
      originalArray.splice(index, 1);
    }
  });

  /* Sort the odd numbers in original array */
  originalArray.sort((a, b) => a - b);

  for (let i = 0; i < originalArray.length; i += 1) {
    /* Find index of first empty element of sortedArray */
    const emptyIndex = sortedArray.findIndex((element) => typeof element !== 'number');
    /* Place odd number in first empty element of sortedArray */
    sortedArray[emptyIndex] = originalArray[i];
  }

  return sortedArray;
}

// Test
console.log(sortArray([1, 33, 7, 22, 5, 6])); /* Expect [1, 5, 7, 22, 33, 6] */
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); /* Expect [1, 8, 3, 6, 5, 4, 7, 2, 9, 0] */
