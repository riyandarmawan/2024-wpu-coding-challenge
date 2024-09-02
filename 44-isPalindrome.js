// WPU Coding Challenge 2024
// 44/366
// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4
// Is it a palindrome?

const isPalindrome = (x) => x.toLowerCase() === x.toLowerCase().split('').reverse().join('');

console.log(isPalindrome('Aba'));
