/**
 * Finally, detect the subarray, whose sum of digits is the maximum and return this sum. 
 * Display this sum in the console.
[-4, 8, -9, 2, -5, 8, -4, 9] -> 13
[8, -4, 9] is our maximum subarray and its sum is 13.
 */

let original = [-4, 8, -9, 2, -5, 8, -4, 9];
let sums = [];
let posFinalMax = -1;
original.forEach((n, i) => {
	let sum = 0;
	for (let j = 0; j <= i; j++) {
		sum += original[j];
	}
  sums.push(sum)
});
