// WPU Coding Challenge 2024
// 29/366
// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2
// Removing Elements

// function removeEveryOther(arr) {
//     let result = [];

//     for(let i = 0; i < arr.length; i += 2) {
//         result.push(arr[i]);
//     }

//     return result;
// }

// wpu
// function removeEveryOther(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i += 2) {
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }

// function removeEveryOther(arr) {
// return arr.filter((el, i) => i % 2 == 0);
// return arr.filter((el, i) => !(i & 1));
// }

const removeEveryOther = (arr) => arr.filter((el, i) => i % 2 == 0);

console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"]));
