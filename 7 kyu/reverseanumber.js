// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

// Examples
//  123 ->  321
// -456 -> -654
// 1000 ->    1

const reverseNumber = (n) => {
    let newArr = [];
    let split = n.toString().split('')
    for (let i = split.length - 1; i >= 0; i--) {
        if (split[i] != '-') {
        newArr.push(split[i])
    } else {
        newArr.unshift(split[i])
    }
}
    return Number(newArr.join(''))
}

// best answer 

function reverseNumber(n) {
    let isNegative = n < 0;  
    let reverseAsString = Math.abs(n).toString().split('').reverse().join('');
    let result = Number(reverseAsString);
    
    return isNegative ? -result : result;
  }