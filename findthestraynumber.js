// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3



function stray(numbers) {
    let trueA = [];
    let falseA = [];
    numbers.map((e, i) => e === numbers[0] ? trueA.push(e) : falseA.push(e))
    let strayArr = trueA.length < falseA.length ? trueA : falseA 
    return strayArr[0]
  }


// best answer 
const stray = nums => nums.reduce((a, b) => a ^ b);