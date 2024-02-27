// WPU Coding Challenge 2024
// 21/366
// https://www.codewars.com/kata/568d0dd208ee69389d000016
// Transportation on vacation

// function rentalCarCost(d) {
//     let total = 0;

//     for (let i = 0; i < d; i++) {
//         total += 40;
//     }

//     if (d >= 7) {
//         total -= 50;
//     } else if (d >= 3) {
//         total -= 20;
//     }

//     return total;
// }

// function rentalCarCost(d) {
//     let total = 0;

//     for (let i = 0; i < d; i++) {
//         total += 40;
//     }

//     (d >= 7) ? total -= 50 : (d >= 3) ? total -= 20 : '';

//     return total;
// }

// const rentalCarCost = (d) => d * 40 - ((d >= 7) ? 50 : (d >= 3) ? 20 : 0);

// wpu
// function rentalCarCost(d) {
//   let diskon = 0;
//   if (d >= 7) {
//     diskon = 50;
//   } else if (d >= 3) {
//     diskon = 20;
//   }
//   return d * 40 - diskon;
// }

const rentalCarCost = (d) => d * 40 - (d >= 7 ? 50 : d >= 3 ? 20 : 0);

console.log(rentalCarCost(7));
