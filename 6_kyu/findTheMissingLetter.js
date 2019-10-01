// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

const findMissingLetter = arr => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return arr.reduce( (r, e, i, a) => {
        if (a[i + 1]) {
            if (a[0] === a[0].toUpperCase()) {
                if (a[i + 1].charCodeAt(0) - 64 !== (e.charCodeAt(0) - 64) + 1) {
                    r = alphabet[(e.charCodeAt(0) - 64)].toUpperCase()
                }
            } else {
                if (a[i + 1].charCodeAt(0) - 96 !== (e.charCodeAt(0) - 96) + 1) {
                    r = alphabet[(e.charCodeAt(0) - 96)]
                }
            }
        }
        return r;
    }, null)
}

// best answer

function findMissingLetter(array) {
    let first = array[0].charCodeAt(0)
    for (let i = 1; i < array.length; i++) {
      if (first + i !== array[i].charCodeAt(0)) {
        return String.fromCharCode(first + i)
      }
    }
    throw new Error("Invalid input")
  }
  