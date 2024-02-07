// WPU Coding Challenge 2024
// 7/366
// https://www.codewars.com/kata/5513795bd3fafb56c200049e
// Count by X

// function countBy(x, n) {
//     let z = [x];

//     for(let i = 0; i < (n - 1); i++) {
//         z.push(z[i] + x)
//     }

//     return z;
// }

// const countBy = (x, n) => {
//     let z = [x];

//     for (let i = 0; i < n - 1; i++) {
//         z.push(z[i] + x);
//     }

//     return z;
// };

// const countBy = (x, n) => {
//     let z = [];

//     for (let i = 1; i <= n; i++) {
//         z.push(x * i);
//     }

//     return z;
// };

// wpu
// function countBy(x, n) {
//   let z = [];
//   for (let i = 1; i <= n; i++) {
//     z.push(i * x);
//   }
//   return z;
// }

// function countBy(x, n) {
//   return [...Array(n)].map((el, i) => (i + 1) * x);
// }

const countBy = (x, n) => [...Array(n)].map((_, i) => (i + 1) * x);

console.log(countBy(2, 5));
