// Get character from ASCII Value

// Write a function getChar/GetChar/get_char which takes a number and returns the corresponding ASCII char for that value.

// Example:

// getChar(65) # => 'A'


function getChar(c){
    return String.fromCharCode(c)
}

// best answer

const getChar = String.fromCharCode;
