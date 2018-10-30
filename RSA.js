// This is the most popular public key algorithm

/*
p,q are large primes
n=p.q
fi(n) = (p-1)(q-1)
Inverse of public key `e` in {1,2...fi(n)-1} is `d`
d.e = 1 mod fi(n)
*/

/*
p,q >= pow(2,512)
*/

/*
Security hinges on the fact that you cannot factor very large 1000 bit numbers
*/

const fi = (p, q) => (p - 1) * (q - 1),
    inverse = require('./Utilities/Inverse');


// inverse(n,e)
(function main() {

    const p = 3, q = 11, n = p * q, fin = fi(p, q), e = 3, d = inverse(fin, e);

    let text = 4;
    console.log(text);
    text = encrypt(text, e, n);
    console.log(text);
    text = decrypt(text, d, n);
    console.log(text);

})();


function encrypt(x, e, n) {

    // pow(x,e) mod n
    return Math.pow(x, e) % n;

}

function decrypt(x, d, n) {

    // pow(y,d) mod n
    return encrypt(x, d, n);

}


