// Write a function that accepts two arguments and returns the remainder after dividing the larger number by the smaller number. Division by zero should return NaN (in C#, throw a new DivideByZeroException instead). Arguments will both be integers.

function remainder(a, b){
    let s = a > b ? b : a;
    let l = a > b ? a : b;
    return s === 0 ? NaN : l % s
  }

// best answer

function remainder(a, b){
    return a > b ? a % b : b % a;
  }