// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

// each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    return [s1.split('').reduce((r, e) => {
        r.indexOf(e) === -1 ? r.push(e): null
        return r
    }, []).join(''), s2.split('').reduce((r, e) => {
        r.indexOf(e) === -1 ? r.push(e): null
        return r
    }, []).join('')].join('').split('').reduce((r, e) => {
        r.indexOf(e) === -1 ? r.push(e): null
        return r
    }, []).sort().join('')
  }

// best answer

// the use of new Set (s1 + s2) creates an array of all the letters in both strings. new Set automatically removes duplicates. 

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')