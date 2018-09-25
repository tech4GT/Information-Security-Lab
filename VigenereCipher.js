const KEY_STREAM = "abcd";


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
        let charcode = input.charCodeAt(ch), key = KEY_STREAM.charCodeAt(ch % KEY_STREAM.length) - 97;
        charcode -= 97;
        charcode = (charcode + key) % 26;
        charcode += 65;
        rv += String.fromCharCode(charcode);
    }
    return rv;
}

function decrypt(input) {
    let rv = "";
    for (ch in input) {
        let charcode = input.charCodeAt(ch), key = KEY_STREAM.charCodeAt(ch % KEY_STREAM.length) - 97;
        charcode -= 65;
        charcode = (charcode - key + 26) % 26;
        charcode += 97;
        rv += String.fromCharCode(charcode);
    }
    return rv;
}