/* Write a function that takes a string of braces and determines if the order
of the braces is valid. It should return true if the string is valid and false
if it's invalid. A string of braces is valid if all braces are matched
with the correct brace in the right position, e.g. ([{}]()). */

function validBraces(braces) {
  const pending = [];
  for (let i = 0; i < braces.length; i += 1) {
    switch (braces[i]) {
      /* Opening braces pushed to 'pending' */
      case '(': case '[': case '{': pending.push(braces[i]); break;
      /* Each closing brace should match the last brace in 'pending', else returns false */
      case ')': if (pending.pop() !== '(') return false; break;
      case ']': if (pending.pop() !== '[') return false; break;
      case '}': if (pending.pop() !== '{') return false; break;
      default:
    }
  }
  return pending.length === 0;
}

// Test
console.log(validBraces('([])')); /* Expect true */
console.log(validBraces('([}]')); /* Expect false */
console.log(validBraces('({})[({})]')); /* Expect true */
