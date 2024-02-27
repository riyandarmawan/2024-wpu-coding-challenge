// WPU Coding Challenge 2024
// 23/366
// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7
// Count the Monkeys!

// function monkeyCount(n) {
//     let monkey = [];

//     for(let i = 1; i <= n; i++) {
//         monkey.push(i);
//     }

//     return monkey;
// }

// wpu
// function monkeyCount(n) {
//   const result = [];
//   for (let i = 1; i <= n; i++) {
//     result.push(i);
//   }
//   return result;
// }

const monkeyCount = (n) => Array.from({ length: n }, (_, i) => i + 1);

console.log(monkeyCount(5));
