// WPU Coding Challenge 2024
// 6/366
// https://www.codewars.com/kata/5556282156230d0e5e000089
// DNA to RNA Conversion

function DNAtoRNA(dna) {
    let seperate = dna.split('');
    
    for(let i = 0; i < seperate.length; i++) {
        if(seperate[i] == "T") {
            seperate[i] = "U";
        }
    }
}