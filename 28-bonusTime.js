// WPU Coding Challenge 2024
// 28/366
// https://www.codewars.com/kata/56f6ad906b88de513f000d96
// Do I get a bonus?

// function bonusTime(salary, bonus) {
//     if (bonus) {
//         return "£" + salary * 10;
//     }

//     return "£" + salary;
// }

// const bonusTime = (salary, bonus) => bonus ? "£" + salary * 10 : "£" + salary;

// wpu
// function bonusTime(salary, bonus) {
//   return `£${bonus ? salary * 10 : salary}`;
// }

const bonusTime = (salary, bonus) => `£${bonus ? salary * 10 : salary}`;

console.log(bonusTime(2, true));
