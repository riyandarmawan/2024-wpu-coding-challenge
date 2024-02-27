// WPU Coding Challenge 2024
// 22/366
// https://www.codewars.com/kata/57a0885cbb9944e24c00008e
// Remove exclamation marks

// function removeExclamationMarks(s) {
//     return s.replaceAll('!', '');
// }

// const removeExclamationMarks = (s) => s.replaceAll('!', '');

// wpu
// function removeExclamationMarks(s) {
//   let result = '';
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] !== '!') {
//       result += s[i];
//     }
//   }
//   return result;
// }

// function removeExclamationMarks(s) {
//   return s.split('!').join('');
// }

const removeExclamationMarks = (s) => s.split("!").join("");

console.log(removeExclamationMarks("Hello World!"));
