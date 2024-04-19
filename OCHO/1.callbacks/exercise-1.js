const numbersList = [];

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function father(a, b, sumFunction) {
  const result = sumFunction(a, b);
  numbersList.push(result);
}

father(5, 3, sum);
father(10, 7, sum);
father(8, 2, sum);

console.log(numbersList);