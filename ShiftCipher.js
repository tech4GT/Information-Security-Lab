const SHIFT_KEY = 3;


(function() {
    let str = "Secret string"
    let enc = encrypt(str);
    let dec = decrypt(enc);
    console.log(str);
    console.log(enc);
    console.log(dec);
})();


function encrypt(input) {
    let rv = "";
    for (ch in input) {
        let charCode = input.charCodeAt(ch);
        charCode = charCode + SHIFT_KEY;
        rv += String.fromCharCode(charCode);
    }
    return rv;
}
function decrypt(input) {
    let rv = "";
    for (ch in input) {
        let charCode = input.charCodeAt(ch);
        charCode = charCode - SHIFT_KEY;
        rv += String.fromCharCode(charCode);
    }
    return rv;
}