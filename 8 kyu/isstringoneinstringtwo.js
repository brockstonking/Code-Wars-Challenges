// Write a function that checks if the letters in the second string are present in the first:

// letterCheck(["trances", "nectar"]) // true
// letterCheck(["compadres", "DRAPES"]) // true
// letterCheck(["parses", "parsecs"]) //false
// Function should not be case sensitive, as indicated in example #2. Note: both strings are presented as a single argument in the form of an array.

function letterCheck(arr) {
    let stringOne = arr[1].toLowerCase().split('')
    result = true
    for (let i = 0; i < stringOne.length; i++) {
        if (!arr[0].includes(stringOne[i])) {
            result = false
        }
    }
    return result
}
    
// best answer

function letterCheck(arr) {
    return [...arr[1].toLowerCase()].every(x => arr[0].toLowerCase().includes(x));
  }