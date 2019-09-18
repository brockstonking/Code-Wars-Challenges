// Modify the spacify function so that it returns the given string with spaces insertedbetween each character.

// spacify("hello world") // returns "h e l l o   w o r l d"

const spacify = str => {
    return str.split('').reduce( (r, e, i) => {
        i !== str.length - 1 ? r.push([e, ' '].join('')) : r.push(e)
        return r;
    }, []).join('');
}

// best answer

// Return the same string, but with spaces between characters
function spacify(str) {
    return str.split("").join(" ");
  }