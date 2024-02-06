// WPU Coding Challenge 2024
// 4/366
// https://www.codewars.com/kata/59ca8246d751df55cc00014c
// Sentence Smash

// function smash (words) {
//     let sentence = "";
    
//     for(let i = 0; i < words.length; i++) {
//         if(words[i] != words[words.length - 1]) {
//             words[i] += " ";
//         }
//         sentence = sentence + words[i];
//     }

//     return sentence;
// };

// wpu
// function smash (words) {
//     return words.join(" ");
// }

// const smash = (Words) => Words.join(" ");

function smash (words) {
    let result = '';

    for(let i = 0; i < words.length; i++) {
        result += words[i];
        if(i != words.length - 1) result += ' ';
    }

    return result;
}

console.log(smash(["this", "is", "a", "really", "long", "sentence"]));