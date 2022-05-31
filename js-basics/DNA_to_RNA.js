// Create a function which translates a given DNA string into RNA.
// The input string can be of arbitrary length - in particular, it may be empty.
// Each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

// Using regex g modifer set to replace all occurences of 'T' with 'U'
const dnaToRna = dna => dna.replace(/T/g, 'U');

// Test
console.log(dnaToRna("GCAT")); // expect GCAU
console.log(dnaToRna("TTTT")); // expect UUUU
