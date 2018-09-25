/* Multiplicative Cipher on Z26 */

const MUlT_KEY = 3;

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
        charCode = (charCode * MUlT_KEY) % 26;
        charCode += 65;
        rv += String.fromCharCode(charCode);
    }
    return rv;
}
function decrypt(input) {
    input = input.split(" ").join('');
    let rv = "";
    for (ch in input) {
        let charCode = input.charCodeAt(ch);
        charCode -= 65;
        charCode = (charCode * Inverse(26, MUlT_KEY)) % 26;
        charCode += 97;
        rv += String.fromCharCode(charCode);
    }
    return rv;
}


function Inverse(base, num) {
    let euResult = ExtendedEuclid(base, num, 1, 0, 0, 1);
    if (euResult.gcd == 1) return euResult.t1;
    else return false;

    function ExtendedEuclid(r1, r2, s1, s2, t1, t2) {
        if (r2 == 0) {
            return {
                gcd: r1,
                t1: t1
            };
        }
        let q = Math.floor(r1 / r2), r = r1 % r2, s = (s1 - q * s2), t = (t1 - q * t2);
        return ExtendedEuclid(r2, r, s2, s, t2, t);
    }
}