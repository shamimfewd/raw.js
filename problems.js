function gramToLiter(gram) {
  const liter = gram / 1000;
  return liter;
}

const result = gramToLiter(1500);
console.log(`${result} ${result > 1 ? "liters" : "liter"}`);
