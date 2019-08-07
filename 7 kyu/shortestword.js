// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

const findShort = (str) => {
    return str.split(' ').map( e => e.split('')).map( e => e.length).sort( (a, b) => a-b)[0]
}

// best answer

function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
  }
  