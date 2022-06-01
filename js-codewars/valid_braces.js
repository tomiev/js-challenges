/*  */

function validBraces(braces){
  const pairs = ['()', '[]', '{}'];
  let valid;

  for (let i = 0; i < (braces.length / 2); i++) {
    if (pairs.includes(`${braces[i]}${braces[(braces.length - 1 - i)]}`)) {
      valid = true;
    } else {
      valid = false;
    }
  }
  return valid;
}

// Test
console.log(validBraces('([])')); // expect true
console.log(validBraces('([}]')); // expect false
console.log(validBraces('({})[({})]')) // expect true => FAILING
