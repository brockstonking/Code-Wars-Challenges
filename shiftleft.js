// You are given two strings. In a single move, you can choose any of them, and delete the first (i.e. leftmost) character.

// For Example:

// By applying a move to the string "where", the result is the string "here".
// By applying a move to the string "a", the result is an empty string "".
// Implement a function that calculates the minimum number of moves that should be performed to make the given strings equal.

// Notes
// Both strings consist of lowercase latin letters.
// If the string is already empty, you cannot perform any more delete operations.

function shiftLeft(s, t){
    let result = 0;

    if (s[s.length - 1] != t[t.length - 1]) {
        result = s.length + t.length
    } else if (s[s.length - 1] === t[t.length - 1]) {
        for (let i = )
    }

    return result
  }

  