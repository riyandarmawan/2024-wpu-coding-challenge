// WPU Coding Challenge 2024
// 32/366
// https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6
// Beginner Series #4 Cockroach

// function cockroachSpeed(s) {
//     return Math.floor((s * 100000) / 3600);
// }

// const cockroachSpeed = (s) => Math.floor((s * 100000) / 3600);

// wpu
// function cockroachSpeed(s) {
//   return Math.floor((s * 100000) / 3600);
// }

// const cockroachSpeed = (s) => ~~((s * 100000) / 3600);
const cockroachSpeed = (s) => Math.floor((s * 100000) / 3600);

console.log(cockroachSpeed(1.08));
