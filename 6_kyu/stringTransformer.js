// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

const stringTransformer = (str) => {
    return str.split('').reduce( (r, e) => {
        r.push(e === e.toLowerCase() ? e.toUpperCase() : e.toLowerCase());
        return r;
    }, []).join('').split(' ').reverse().join(' ');
}

// best answer

function stringTransformer(str) {
    return str
      .split(' ')
      .reverse()
      .join(' ')
      .split('')
      .map(v => v == v.toUpperCase() ?
        v.toLowerCase() :
        v.toUpperCase())
      .join('');
  }