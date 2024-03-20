// WPU Coding Challenge 2024
// 35/366
// https://www.codewars.com/kata/55cbc3586671f6aa070000fb
// Grasshopper - Check for factor

// function checkForFactor(base, factor) {
//     if(base % factor === 0) {
//         return true;
//     }

//     return false;
// }

// const checkForFactor = (base, factor) => base % factor === 0;

// wpu
// function checkForFactor(base, factor) {
//   // return base % factor === 0;
//   return !(base % factor);
// }

const checkForFactor = (base, factor) => !(base % factor);

console.log(checkForFactor(10, 2));
