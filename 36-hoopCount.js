// WPU Coding Challenge 2024
// 36/366
// https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145
// Keep up the hoop

// function hoopCount(n) {
//     if (n > 10) {
//         return "Great, now move on to tricks";
//     }

//     return "Keep at it until you get it";
// }

// const hoopCount = (n) => n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";

// wpu
// function hoopCount(n) {
//   if (n >= 10) {
//     return 'Great, now move on to tricks';
//   } else {
//     return 'Keep at it until you get it';
//   }
// }

const hoopCount = (n) => (n >= 10 ? 'Great, now move on to tricks' : 'Keep at it until you get it');

console.log(hoopCount(3));
