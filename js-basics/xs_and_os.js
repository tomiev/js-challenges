/* Task: Check to see if a string has the same amount of 'x's and 'o's. The method
must return a boolean and be case insensitive. The string can contain any char. */

function xo(str) {
  const arrLower = str.toLowerCase().split('');
  const xArr = arrLower.filter(element => element === 'x');
  const oArr = arrLower.filter(element => element === 'o');
  return xArr.length === oArr.length;
}

// Alternate method
// function xo(str) {
//   let x = str.match(/x/gi);
//   let o = str.match(/o/gi);
//   return (x && x.length) === (o && o.length);
// }

// Test
console.log(xo('XOxOo')); // expect false
console.log(xo('XOXOXO')); // expect true
console.log(xo('ABCdEFG')); // expect true
