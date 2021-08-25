// Next, the previous list without zeros will represent a fictitious integer (48925848).
// Add 1 unit to it, leaving the final total as an array. Display this list in the console.
// [4, 8, 9, 2, 5, 8, 4, 8, 0, 0, 0] -> [4, 8, 9, 2, 5, 8, 4, 9]

let original = [4, 8, 9, 2, 5, 8, 4, 8, 0, 0, 0];

let number = (+(original.filter(n=>n!==0)).join("") + 1).toString()

let final = [];
for (let i = 0; i < number.length; i++) {
  final.push(+number[i])
}

console.log(final);
