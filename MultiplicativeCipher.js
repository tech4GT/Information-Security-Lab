/* Multiplicative Cipher on Z26 */

const MULT_KEY = 3, Inverse = require('./Utilities/Inverse');

(function() {
    let str = "secret string"
    console.log(str);
    str = encrypt(str);
    console.log(str);
    str = decrypt(str);
    console.log(str);
})();

function encrypt(input) {
    input = input.split(" ").join('');
    let rv = "";
    for (ch in input) {
        let charCode = input.charCodeAt(ch);
        charCode -= 97;
        charCode = (charCode * MULT_KEY) % 26;
        charCode += 65;
        rv += String.fromCharCode(charCode);
    }
    return rv;
}
function decrypt(input) {
    let rv = "";
    for (ch in input) {
        let charCode = input.charCodeAt(ch);
        charCode -= 65;
        charCode = (charCode * Inverse(26, MULT_KEY)) % 26;
        charCode += 97;
        rv += String.fromCharCode(charCode);
    }
    return rv;
}