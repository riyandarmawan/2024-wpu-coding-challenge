// WPU Coding Challenge 2024
// 8/366
// https://www.codewars.com/kata/5513795bd3fafb56c200049e
// If you can't sleep, just count sheep!!

// var countSheep = function (num) {
//     let sheep = "";

//     for (let i = 1; i <= num; i++) {
//         sheep += i + " sheep...";
//     }

//     return sheep;
// };

// wpu
// var countSheep = function (num) {
//   let result = '';
//   for (let i = 1; i <= num; i++) {
//     result += `${i} sheep...`;
//   }
//   return result;
// };

const countSheep = (num) => [...Array(num)].map((_, i) => `${i + 1} sheep...`).join('');

console.log(countSheep(3));
