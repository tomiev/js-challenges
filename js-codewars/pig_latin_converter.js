/* Move the first letter of each word to the end of it, then add "ay" to the end
of the word. Leave punctuation marks untouched.
e.g. "This is pig latin!" => "hisTay siay igpay atinLay!" */

function pigLatin(str) {
  /* Following regexp has three capture groups: (1) the first letter, (2) the
  rest of the word, and (3) the first character after the word (including
  punctuation). */
  const regexp = /\b(\w)(\w*)(\b)/gm;

  /* Str is converted to pig latin using the regexp capture groups.
  Rest of the word ($2) comes first, then the first letter ($1)+ 'ay', then any
  non-word characters ($3) at the end. */
  return str.replace(regexp, '$2$1ay$3');
}

/* Tests */
console.log(pigLatin('Hello World !')); /* 'Expect elloHay orldWay !' */
console.log(pigLatin('')); /* Expect '' */
console.log(pigLatin('Hello World!!!!')); /* Expect elloHay orldWay!!!! */
