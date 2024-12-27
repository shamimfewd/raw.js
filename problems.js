// function gramToLiter(gram) {
//   const liter = gram / 1000;
//   return liter;
// }

// const result = gramToLiter(1500);
// console.log(`${result} ${result > 1 ? "liters" : "liter"}`);

// ==============================

function oddNumbers(numbers) {
  const odds = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
      odds.push(number);
    }
  }

  let sum = 0;
  for (const odd of odds) {
    sum = sum + odd;
  }

  const avg = sum / odds.length;

  return avg;
}
const numbers = [2, 5, 9, 6, 8, 7, 54, 63, 1, 4, 6, 2, 4, 55];
const result = oddNumbers(numbers);
console.log(result.toFixed(2));
