// Next, multiply each digit that is not a zero and in an even index, by -1.
//  Display this list in the console.
// [4, 8, 9, 2, 5, 8, 4, 9] -> [-4, 8, -9, 2, -5, 8, -4, 9]

let original = [4, 8, 9, 2, 5, 8, 4, 9];
let final = original.map((n, i) => {
	if (n !== 0 && i % 2 === 0) {
		return n * -1;
	}
	return n;
});
console.log(final);
