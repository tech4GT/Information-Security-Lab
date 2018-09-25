/* Shift cipher on Z26 */

const SHIFT_KEY = 3;


(function() {
    let str = "secret string"
    let enc = encrypt(str);
    let dec = decrypt(enc);
    console.log(str);
    console.log(enc);
    console.log(dec);
})();


function encrypt(input) {
    input = input.split(" ").join('');
    let rv = "";
    for (ch in input) {
        let charCode = input.charCodeAt(ch);
        charCode -= 97;
        charCode = (charCode + SHIFT_KEY) % 26;
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
        charCode = (charCode - SHIFT_KEY + 26) % 26;
        charCode += 97;
        rv += String.fromCharCode(charCode);
    }
    return rv;
}