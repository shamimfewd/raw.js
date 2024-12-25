// push : used to inject item in the last of an array
//pop : used to remove item from the last of an array
//unshift : used to inject item in the first of an array
//shift : used to remove item from the first of an array
//includes : used to check the specific item have in array or not
//indexOf  : used to check the index number of item
//join() : used to join
//concat() : used to marge two array in one
//slice(): don't change the main array
//splice():  change the main array

let numbers = [58, 22, 55, 66, 99];

let reveredNum = [];
for (const num of numbers) {
  reveredNum.unshift(num);
  //   console.log(num);
}
// console.log(reveredNum);

let persons = ["shamim", "shohag", "mahmud"];

let tesArr = [58, 22, 55, 66, 99];
let index3 = tesArr[3];
let index4 = tesArr[4];

for (let i = 0; i < tesArr.length; i++) {
  console.log(`${i} ${tesArr[i]}`);
}
