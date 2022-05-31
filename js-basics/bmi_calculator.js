// TASK: Write a function calculating Body Mass Index and returning BMI category
function bmi(weight, height) {
  num = weight / (height ** 2);
  if (num <= 18.5) {
    return 'Underweight';
  } else if (num <= 25) {
    return 'Normal';
  } else if (num <= 30) {
    return 'Overweight';
  } else return 'Obese';
}

// Test
console.log(bmi(80, 1.80)); // expect 'Normal'
