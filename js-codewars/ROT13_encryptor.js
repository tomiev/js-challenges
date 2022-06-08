/* ROT13 is a simple ter substitution cipher that replaces a ter with the
ter 13 ters after it in the alphabet. ROT13 is an example of the Caesar cipher.
Create a function that takes a string and returns the string ciphered with ROT13.
If there are numbers or special characters included in the string, they should be
returned as they are. */

function encrypt(message) {
  const abc = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
  /* The index of the ROT-13 counterpart for a given character, char, is indexOf(char) + 13 */
  return message.replace(/[a-z]/gi, (char) => abc[abc.indexOf(char) + 13]);
}

/* Tests */
console.log(encrypt('Hello_world123')); /* Expect 'Uryyb_jbeyq123' */
console.log(encrypt('This is encrypted')); /* Expect 'Guvf vf rapelcgrq' */
