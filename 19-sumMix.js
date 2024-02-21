// WPU Coding Challenge 2024
// 19/366
// https://www.codewars.com/kata/57eaeb9578748ff92a000009
// Sum Mixed Array

// function sumMix(x) {
//     let sum = 0;

//     for(let i = 0; i < x.length; i++) {
//         sum += parseInt(x[i]);
//     }

//     return sum;
// }

// const sumMix = (x) => x.reduce((acc, curr) => parseInt(acc) + parseInt(curr));(salah)

// wpu
// function sumMix(x) {
//   let total = 0;
//   for (let i = 0; i < x.length; i++) {
//     total += +x[i];
//   }

//   return total;
// }

const sumMix = (x) => x.reduce((acc, curr) => acc + +curr, 0);

console.log(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"])); // 41
