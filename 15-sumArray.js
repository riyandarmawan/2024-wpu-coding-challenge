// WPU Coding Challenge 2024
// 15/366
// https://www.codewars.com/kata/576b93db1129fcf2200001e6
// Sum without highest and lowest number

// function sumArray(array) {
//     if (array == null || array == []) return 0;

//     let sum = 0;
//     let save;

//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] > array[j]) {
//                 save = array[i];
//                 array[i] = array[j];
//                 array[j] = save;
//             }
//         }
//     }

//     array.pop();
//     array.shift();

//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }

//     return sum;
// }

// wpu
// function sumArray(array) {
//   if (array === null || array.length <= 2) return 0;
//   const sorted = array.sort((a, b) => a - b);
//   let result = 0;
//   for (i = 1; i < sorted.length - 1; i++) {
//     result += sorted[i];
//   }
//   return result;
// }

const sumArray = (array) => array ? array.sort((a, b) => a - b).slice(1, -1).reduce((acc, curr) => acc + curr) : 0;

console.log(sumArray([6, 2, 1, 8, 10]));
