// WPU Coding Challenge 2024
// 41/366
// https://www.codewars.com/kata/577bd026df78c19bca0002c0
// Correct the mistakes of the character recognition software

//function correct(string) {
//  let result = string.split(''); 
//
//  for(let i = 0; i < string.length; i++) {
//    if(string[i] === "5") {
//      result[i] = "S";
//    } else if(string[i] === "0") {
//      result[i] = "O";
//    } else if(string[i] === "1") {
//      result[i] = "I";
//    }
//  }
//
//  return result.join('');
//}

const correct = (string) => string
  .split('')
  .map((char) => {
    if (char === '5') return 'S';  
    if (char === '0') return 'O';
    if (char === '1') return 'I';
    return char;
  })
  .join('');

console.log(correct("L0ND0N"));
