/* eslint-disable quote-props */
/* ROT13 is a simple ter substitution cipher that replaces a ter with the
ter 13 ters after it in the alphabet. ROT13 is an example of the Caesar cipher.
Create a function that takes a string and returns the string ciphered with ROT13.
If there are numbers or special characters included in the string, they should be
returned as they are. */

function encrypt(message) {
  let encrypted = '';
  const alpha1 = [
    'A',
    'a',
    'B',
    'b',
    'C',
    'c',
    'D',
    'd',
    'E',
    'e',
    'F',
    'f',
    'G',
    'g',
    'H',
    'h',
    'I',
    'i',
    'J',
    'j',
    'K',
    'k',
    'L',
    'l',
    'M',
    'm',
  ];

  const alpha2 = [
    'N',
    'n',
    'O',
    'o',
    'P',
    'p',
    'Q',
    'q',
    'R',
    'r',
    'S',
    's',
    'T',
    't',
    'U',
    'u',
    'V',
    'v',
    'W',
    'w',
    'X',
    'x',
    'Y',
    'y',
    'Z',
    'z',
  ];

  for (let i = 0; i < message.length; i += 1) {
    const letter = message[i];
    if (alpha1.includes(letter)) {
      const index = alpha1.indexOf(letter);
      encrypted += (alpha2[index]);
    } else if (alpha2.includes(letter)) {
      const index = alpha2.indexOf(letter);
      encrypted += (alpha1[index]);
    } else if (/\W/.test(letter) || /[0-9]/.test(letter) || letter === '_') {
      encrypted += letter;
    }
  }

  return encrypted;
}

/* Tests */
console.log(encrypt('Hello_world')); /* Expect 'Uryyb_jbeyq' */
console.log(encrypt('This is encrypted')); /* Expect 'Guvf vf rapelcgrq' */
