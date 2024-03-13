// WPU Coding Challenge 2024
// 27/366
// https://www.codewars.com/kata/568dcc3c7f12767a62000038
// L1: Set Alarm

// function setAlarm(employed, vacation) {
//     if (employed === false && vacation === true) {
//         return false;
//     } else if (employed === true && vacation === false) {
//         return true;
//     }

//     return false;
// }

// const setAlarm = (employed, vacation) => employed && !vacation;

// wpu
// function setAlarm(employed, vacation) {
//   if (employed) {
//     if (vacation) {
//       return false;
//     } else {
//       return true;
//     }
//   } else {
//     if (vacation) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// }

// function setAlarm(employed, vacation) {
//   return employed && !vacation;
// }

const setAlarm = (employed, vacation) => employed && !vacation;

console.log(setAlarm(false, true));
