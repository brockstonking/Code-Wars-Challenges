// Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples:

// sumCubes(2) // 9
// // sum of the cubes of 1 and 2 is 1 + 8

const sumCubes = num => {
    let numList = [];
    for (let i = 1; i <= num; i++) {
        numList.push(i);
    };
    return numList.reduce( (r, e) => {
        r += (e*e*e);
        return r;
    });
}

// best answer

function sumCubes(n) {
    return (n * (n + 1) / 2) ** 2;
  }