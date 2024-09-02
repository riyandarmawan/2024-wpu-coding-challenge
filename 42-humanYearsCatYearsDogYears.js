// WPU Coding Challenge 2024
// 42/366
// https://www.codewars.com/kata/577bd026df78c19bca0002c0
// Cat years, Dog years

var humanYearsCatYearsDogYears = function(humanYears) {
  let catYears = 15;
  let dogYears = 15;

  for (let i = 1; i <= humanYears; i++) {
    if (i === 2) {
      catYears += 9;
      dogYears += 9;
    } else if (i > 2) {
      catYears += 4;
      dogYears += 5;
    }
  }

  return [humanYears, catYears, dogYears];
}

console.log(humanYearsCatYearsDogYears(10));
