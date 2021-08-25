// Having a list of n digits where 0 <= digit <= 9 and where n is less than or equal to 100,
// arrange it to move all 0's to the right in O(n) time. Display this list in the console.
// [4, 8, 0, 9, 2, 0, 5, 8, 0, 4, 8] -> [4, 8, 9, 2, 5, 8, 4, 8, 0, 0, 0]

let original = [4, 8, 0, 9, 2, 0, 5, 8, 0, 4, 8];
let c = 0;
original = original.filter((n) => {
	if (n !== 0) {
    return n;
	}
  c++;
});
original = original.concat(new Array(c).fill(0))
console.log(original);

