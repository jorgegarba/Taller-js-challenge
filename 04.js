/**
 * Finally, detect the subarray, whose sum of digits is the maximum and return this sum. 
 * Display this sum in the console.
[-4, 8, -9, 2, -5, 8, -4, 9] -> 13
[8, -4, 9] is our maximum subarray and its sum is 13.
 */

let original = [-4, 8, -9, 2, -5, 8, -4, 9];
let subarrays = [];
original.forEach((n, index) => {
	let arrayTemp = [];
	for (let j = index; j < original.length; j++) {
		arrayTemp.push(original[j]);
	}
	subarrays.push(arrayTemp);
});

let max = -9999;
let positionMax = -1;
subarrays.forEach((array, pos) => {
	let sumTmp = array.reduce((prev, actual) => prev + actual, 0);
	if (sumTmp > max) {
		positionMax = pos;
		max = sumTmp;
	}
});

console.log(subarrays[positionMax]);
console.log(
	`[${subarrays[
		positionMax
	].toString()}] is our maximun subarray and its sum is ${max}`
);
