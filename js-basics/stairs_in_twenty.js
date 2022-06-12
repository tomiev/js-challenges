/* Instructions: https://www.codewars.com/kata/56fc55cd1f5a93d68a001d4e/train/javascript */

function stairsIn20(stairs){
  let total = 0;
  stairs.forEach(day => {
    total += day.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  });
  return total * 20;
}
