// const person = {
//   name: "shamim",
//   age: 23,
//   "my-hobbies": ["a", "b", "c"],
// };

// let test = person.age + 2;
// console.log(test);
// console.log(person["my-hobbies"]);

const computer = {
  brand: "google",
  price: 123456,
  hdd: "220gb",
};

// const test = delete computer.price;
// console.log(test);
// console.log(computer);
// const keys = Object.keys(computer);
// console.log(keys);

// const values = Object.values(computer);
// console.log(values);

for (const one in computer) {
//   console.log(one);
  console.log(computer[one]);
}
