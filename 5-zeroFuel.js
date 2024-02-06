// WPU Coding Challenge 2024
// 5/366
// https://www.codewars.com/kata/5861d28f124b35723e00005e
// Will You Make It

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     if(mpg * fuelLeft >= distanceToPump) {
//         return true;
//     } else {
//         return false;
//     }
// };

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return mpg * fuelLeft >= distanceToPump;
// };

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump;

// wpu 
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return distanceToPump / mpg <= fuelLeft;
// }

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return fuelLeft * mpg <= distanceToPump;
// }

const zeroFuel = (distanceToPump, mpg, fuelLeft) => fuelLeft * mpg <= distanceToPump;

console.log(zeroFuel(100, 50, 2));