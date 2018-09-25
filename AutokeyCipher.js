const FIRST_KEY = 3;

(function() {
    let str = "secret string";
    console.log(str);
    str = encrypt(str);
    console.log(str);
    str = decrypt(str);
    console.log(str);
})();


function encrypt(input) {
    input = input.split(" ").join("");
    let rv = "";
    for (ch in input) {
        let charCode = input.charCodeAt(ch);
        if (ch == 0) key = FIRST_KEY;
        else key = input.charCodeAt(ch - 1) - 97;
        charCode -= 97;
        charCode = (charCode + key) % 26;
        charCode += 65;
        rv += String.fromCharCode(charCode);
    }
    return rv;
}

function decrypt(input) {
    let rv = "";
    for (ch in input) {
        let charCode = input.charCodeAt(ch);
        if (ch == 0) key = FIRST_KEY;
        else key = (rv.charCodeAt(ch - 1) - 97) % 26;
        charCode -= 65;
        charCode = (charCode - key + 26) % 26;
        charCode += 97;
        rv += String.fromCharCode(charCode);
    }
    return rv;
}