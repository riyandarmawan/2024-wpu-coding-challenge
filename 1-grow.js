// WPU Coding Challenge 2024
// 1/366
// https://www.codewars.com/kata/57f780909f7e8e3183000078
// Reduce but Grow 

function grow(x) {
    let save = x[0];

    for(let i = 1; i < x.length; i++) {
        save = save * x[i];
    }

    return save;
}



console.log(grow([1,2,3,4]));