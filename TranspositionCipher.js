const FIRST_KEY = [11, 0, 3, 4, 5, 1, 9, 2, 7, 10, 8, 6];

(function() {
    let str = "secret string";
    console.log(str);
    str = encrypt(str);
    console.log(str);
    str = decrypt(str);
    console.log(str);
})();

function encrypt(input) {
	input = input.split(" ").join('');
	let rv = new Array(12);
	for(ch in input) {
		let value = FIRST_KEY[ch];
		rv[ch] = input.charAt(value);
	}
	return rv.join('');
}

function decrypt(input) {
	let newKey = rev_key(FIRST_KEY),rv = new Array(12);
	for(ch in input) {
		let value = newKey[ch];
		rv[ch] = input.charAt(value);
	}
	return rv.join('');
}

function rev_key(arr){
	let rv = new Array(arr.length);
	for(let i in arr){
		rv[arr[i]] = i;
	}
	return rv;
}
