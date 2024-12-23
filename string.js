const address = "mohammadpur";
// console.log(address.slice(2, 5));
// console.log(address.split(" "));
// console.log(address.substring());

const add = "my home town is gaibandha";
// console.log(add.concat(" ").concat(address));
// console.log(add.join());
// console.log(add.includes("s"));
let reverse = "";
for (const letter of add) {
  reverse = letter + reverse;
}
console.log(reverse);
