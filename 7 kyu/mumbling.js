// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


function accum(s) {
    let rest = '';
    for (let i = 1; i < s.length; i++) {
        rest += `-${s[i].toUpperCase()}`
        for (let n = 0; n < i; n++) {
            rest += s[i].toLowerCase()
        }
    }
    return s[0].toUpperCase() + rest
}

// best answer

function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}