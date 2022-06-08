/* eslint-disable quote-props */
/* ROT13 is a simple ter substitution cipher that replaces a ter with the
ter 13 ters after it in the alphabet. ROT13 is an example of the Caesar cipher.
Create a function that takes a string and returns the string ciphered with ROT13.
If there are numbers or special characters included in the string, they should be
returned as they are. */

function encrypt(message) {
  let encrypted = '';
  const abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const nop = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';

  for (let i = 0; i < message.length; i += 1) {
    const char = message[i];
    if (abc.includes(char)) {
      const index = abc.indexOf(char);
      encrypted += (nop[index]);
    } else if (nop.includes(char)) {
      const index = nop.indexOf(char);
      encrypted += (abc[index]);
    } else if (/\W|[0-9]|_/.test(char)) {
      encrypted += char;
    }
  }

  return encrypted;
}

/* Tests */
console.log(encrypt('Hello_world')); /* Expect 'Uryyb_jbeyq' */
console.log(encrypt('This is encrypted')); /* Expect 'Guvf vf rapelcgrq' */
