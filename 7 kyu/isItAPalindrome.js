// Write function isPalindrome that checks if a given string (case insensitive) is a palindrome.

const isPalindrome = (string) => {
    let first = string.toLowerCase().split('').filter( (e, i) => i < string.length / 2)
    let last = string.toLowerCase().split('').filter( (e, i) => Math.floor(i > (string.length / 2) - 1)).reverse();
    return JSON.stringify(first) === JSON.stringify(last)
}

// best answer

const isPalindrome = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
  }