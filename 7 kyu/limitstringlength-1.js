// Complete the solution, so that it returns the truncated version of the string followed by '...'.

// Example:

// solution('Testing String',3) // should return 'Tes...'
// solution('Testing String',8) // should return 'Testing ...'
// solution('Test',8) // should return 'Test'

function solution(string,limit){
    return string.length > limit ? string.split('').splice(0,limit).join('') + '...' : string
}

// best answer

function solution(string,limit){
    return string.length > limit ? string.substr(0,limit) + "..." : string;
}