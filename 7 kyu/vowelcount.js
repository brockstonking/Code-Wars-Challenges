// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    var vowelsCount = 0;
    
    str.split('').forEach( e => {
        if (e === 'a' || e === 'e' || e === 'i' || e === 'o' || e === 'u') {
            vowelsCount++
        }
    })    
    return vowelsCount;
  }

// best answer

function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }