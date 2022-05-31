/* TASK: Complete the solution so that it returns true if the first argument
(string) passed in ends with the 2nd argument (also a string) */

let solution = (str, ending) => str.endsWith(ending);

// Test
console.log(solution('Spain', 'ain')); // expect true
console.log(solution('Spain', 'ough')); // expect false
