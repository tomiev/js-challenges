// Write function converting a number to a string
function numberToString(num) {
  return num.toString();
}

// Write function returning the length of an array
function getArrayLength(arr) {
  return arr.length;
}

// Write function returning the first element of an array
function getFirst(arr) {
  return arr[0];
}

// Write function returning last element of an array
function getLast(arr) {
  const lastIndex = arr.length - 1;
  return arr[lastIndex];
}

// Write function pushing an element to an array
function pushElement(arr) {
  const el=1;
  arr.push(el);
  return arr;
}

// Write function popping an element from an array, then returning the array
function popElement(arr) {
  arr.pop();
  return arr;
}
