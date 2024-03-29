// WPU Coding Challenge 2024
// 6/366
// https://www.codewars.com/kata/5556282156230d0e5e000089
// DNA to RNA Conversion

// function DNAtoRNA(dna) {
//     let seperate = dna.split("");

//     for (let i = 0; i < seperate.length; i++) {
//         if (seperate[i] == "T") {
//             seperate[i] = "U";
//         }
//     }
// }

// wpu
// function DNAtoRNA(dna) {
//     let seperate = dna.split('');

//     for(let i = 0; i < seperate.length; i++) {
//         if(seperate[i] == "T") {
//             seperate[i] = "U";
//         }
//     }
// }

// function DNAtoRNA(dna) {
//   let rna = '';
//   for (let i = 0; i < dna.length; i++) {
//     rna += dna[i] === 'T' ? 'U' : dna[i];
//   }
//   return rna;
// }

// const DNAtoRNA = (dna) =>
//   dna
//     .split('')
//     .map((el) => (el === 'T' ? 'U' : el))
//     .join('');

// const DNAtoRNA = (dna) => dna.replace(/T/g, 'U');
// const DNAtoRNA = (dna) => dna.replaceAll('T', 'U');

const DNAtoRNA = (dna) => dna.split('T').join('U');

console.log(DNAtoRNA("GCAT"));
