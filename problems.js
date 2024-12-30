// function gramToLiter(gram) {
//   const liter = gram / 1000;
//   return liter;
// }

// const result = gramToLiter(1500);
// console.log(`${result} ${result > 1 ? "liters" : "liter"}`);

// ==============================

// function oddNumbers(numbers) {
//   const odds = [];
//   for (const number of numbers) {
//     if (number % 2 === 1) {
//       odds.push(number);
//     }
//   }

//   let sum = 0;
//   for (const odd of odds) {
//     sum = sum + odd;
//   }

//   const avg = sum / odds.length;

//   return avg;
// }
// const numbers = [2, 5, 9, 6, 8, 7, 54, 63, 1, 4, 6, 2, 4, 55];
// const result = oddNumbers(numbers);
// console.log(result.toFixed(2));

// ==================================

// const numbers = [
//   1, 2, 5, 8, 7, 9, 6, 5, 4, 2, 3, 1, 2, 3, 6, 5, 4, 7, 8, 9, 3, 2, 1, 4, 7, 8,
//   9, 6, 3, 2,
// ];

// function uniqueArray(numbers) {
//   const unique = [];
//   for (const number of numbers) {
//     if (unique.includes(number) === false) {
//       unique.push(number);
//     }
//   }
//   return unique;
// }

// const result = uniqueArray(numbers);
// console.log(result);

// =================================

// const numbers = [5, 6, 11, 12, 98, 5];

// function findMultiple(numbers, num) {
//   const count = numbers.filter((item) => item === num).length;
//   return count;
// }
// const result = findMultiple(numbers, 2525);
// console.log(result);

// ===============================

// const numbers = [65, 66, 67, 654, 62, 474, 633, 2222, 68, 69, 70];

// function getMax(numbers) {
//   let maxNum = numbers[0];
//   for (const num of numbers) {
//     if (num > maxNum) {
//       maxNum = num;
//     }
//   }
//   return maxNum;
// }

// const result = getMax(numbers);
// console.log(result);

// const numbers = [65, 66, 67, 654, 62, 474, 633, 2222, 68, 69, 70];
// function getMin(numbers) {
//   let min = numbers[0];
//   for (const num of numbers) {
//     if (num < min) {
//       min = num;
//     }
//   }
//   return min;
// }

// const result = getMin(numbers);
// console.log(result);

// // ==================================================

// function getCalculate(chair, table, bed) {
//   const perChair = 3;
//   const perTable = 10;
//   const perBed = 50;

//   const totalChair = perChair * chair;
//   const totalTable = perTable * table;
//   const totalBed = perBed * bed;

//   const inTotal = totalChair + totalTable + totalBed;
//   return inTotal;

//   // return {
//   //   totalChair,
//   //   totalTable,
//   //   totalBed,

//   //   inTotal: totalChair + totalBed + totalTable,
//   // };
// }

// const result = getCalculate(5, 6, 1);
// console.log(result);

function clothsCalculate(shirt, pent, shoe) {
  const perShirt = 500;
  const perPent = 700;
  const perShoe = 1000;
  const disCount = 5;

  const totalShirtPrice = perShirt * shirt;
  const totalPentPrice = perPent * pent;
  const totalShoePrice = perShoe * shoe;

  const inTotal = totalShirtPrice + totalPentPrice + totalShoePrice;
  console.log("inTotal =", inTotal);
  if (inTotal >= 4000) {
    const disCountAmount = inTotal - (inTotal * disCount) / 100;
    return disCountAmount;
  } else {
    console.log("you are not eligible for the offer");
  }

  return inTotal;
}
const result = clothsCalculate(1, 5, 1);
console.log(result);
