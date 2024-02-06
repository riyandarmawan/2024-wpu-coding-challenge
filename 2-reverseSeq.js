// WPU Coding Challenge 2024
// 2/366
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d
// Reversed Sequence

// const reverseSeq = n => {
//     let value = new Array(n);

//     for(let i = 0; i < n; i++) {
//         value[i] = n - i;
//     }

//     return value;
// }

// wpu
// pertama
// const reverseSeq = (n) => {
//     const result = [];

//     for(let i = n; i >= 1; i--) {
//         result.push(i);
//     }

//     return result;
// };

// kedua
// const reverseSeq = (n) => [...Array(n)].map((el, i) => i + 1).reverse();

// ketiga
const reverseSeq = (n) => [...Array(n)].map((el, i) => n - i);

console.log(reverseSeq(5));
