// 100th Kata
// You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:

// 'Hello World'

// would give:


// Words in your solution should be left-aligned.

const mirror = str => {
    let longestWordLength = str.split(' ').reduce((r, e) => {r = (e.length > r ? e.length : r); debugger; return r;}, 0)
    let words = str.split(' ').map(e => ['* '].concat([e.length < longestWordLength ? [[...e].reverse().join('')].concat(new Array(longestWordLength - e.length).fill(' ')).join('') : [...e].reverse().join('')]).concat(' *').join('')).join('\n')
    return [new Array(longestWordLength + 4).fill('*').join('')].concat(words).concat(new Array(longestWordLength + 4).fill('*').join('')).join('\n')
}

console.log(mirror('grandpa did it'))


// best answer 

// function mirror(s){
//     let a = s.split(' ');
//     let m = Math.max(...a.map(x=>x.length));
//     a = a.map(x=>'* '+[...x].reverse().join('')+' '.repeat(m-x.length)+' *');
//     return ['*'.repeat(m+4),...a,'*'.repeat(m+4)].join('\n');
//   }