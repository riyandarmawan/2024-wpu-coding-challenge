// WPU Coding Challenge 2024
// 26/366
// https://www.codewars.com/kata/58649884a1659ed6cb00007
// Thinkful - Logic Drills: Traffic light

// function updateLight(current) {
//     let light = "";

//     if (current === "green") {
//         light = "yellow";
//     } else if (current === "yellow") {
//         light = "red";
//     } else if (current === "red") {
//         light = "green";
//     }

//     return light;
// }

// const updateLight = (current) => (current === "green") ? 'yellow' : (current === "yellow") ? 'red' : 'green';

// const updateLight = (current) => ({green: 'yellow', yellow: 'red', red: 'green'})[current];

// wpu
// function updateLight(current) {
//   if (current === 'green') {
//     return 'yellow';
//   } else if (current === 'yellow') {
//     return 'red';
//   } else {
//     return 'green';
//   }
// }

// function updateLight(current) {
//   switch (current) {
//     case 'green':
//       return 'yellow';
//     case 'yellow':
//       return 'red';
//     case 'red':
//       return 'green';
//   }
// }

// function updateLight(current) {
//   return current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green';
// }

// const rules = {
//   green: 'yellow',
//   yellow: 'red',
//   red: 'green',
// };
// function updateLight(current) {
//   return rules[current];
// }

// const updateLight = (current) => (current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green');

const updateLight = (current) =>
  ({
    green: 'yellow',
    yellow: 'red',
    red: 'green',
  }[current]);

console.log(updateLight("green"));
