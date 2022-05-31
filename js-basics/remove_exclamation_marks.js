// Write function removeExclamationMarks which removes all exclamation marks
// from a given string.

const removeExclamationMarks = string => string.replace(/!/g, '');

// Test
console.log(removeExclamationMarks("Hello world!")); // Expect "Hello world"
console.log(removeExclamationMarks("!!!!!!Java!Script!!!!!!")); // Expect "JavaScript"
