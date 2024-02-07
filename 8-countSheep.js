// WPU Coding Challenge 2024
// 8/366
// https://www.codewars.com/kata/5513795bd3fafb56c200049e
// If you can't sleep, just count sheep!!

var countSheep = function (num) {
    let sheep = "";

    for (let i = 1; i <= num; i++) {
        sheep += i + " sheep...";
    }

    return sheep;
};

console.log(countSheep(3));
