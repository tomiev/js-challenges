/* Write a function that takes a string of braces, and determines if the order
of the braces is valid. It should return true if the string is valid, and false
if it's invalid. A string of braces is considered valid if all braces are matched
with the correct brace. */

function validBraces(braces) {
  const depth = [];
  for (let i = 0; i < braces.length; i += 1) {
    switch (braces[i]) {
      case '(': case '[': case '{': depth.push(braces[i]); break;
      case ')': if (depth.pop() !== '(') return false; break;
      case ']': if (depth.pop() !== '[') return false; break;
      case '}': if (depth.pop() !== '{') return false; break;
      default:
      // do nothing
    }
  }
  return depth.length === 0;
}

// Test
console.log(validBraces('([])')); // expect true
console.log(validBraces('([}]')); // expect false
console.log(validBraces('({})[({})]')); // expect true
