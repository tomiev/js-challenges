// Given a string of digits, replace any digit below 5 with '0' and any digit 5
// and above with '1'. Return the resulting string.


function fakeBin(string) {
  return string.split('').map(num => num < 5 ? 0 : 1).join('');
}

// Test
console.log(fakeBin('45385593107843568')); // expect '01011110001100111'
console.log(fakeBin('99985593107843222')); // expect '11111110001100000'
