/*  Write a function for verifying ATM PIN codes. Codes must be 4 or 6 digits
long and only consist of numbers. Return a boolean. */

function validatePin(pin) {
  const regex = /^(\d{4}|\d{6})$/g;
  return regex.test(pin);
};

// Test
console.log(validatePin('8456')); // expect true
console.log(validatePin('845678')); // expect true
console.log(validatePin('abc123')); // expect false
console.log(validatePin('12345')); // expect false
