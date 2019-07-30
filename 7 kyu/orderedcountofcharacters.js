// Count the number of occurrences of each character and return it as a list of tuples in order of appearance.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

// var orderedCount = function (text) {
//     let working = [];
//     let split = text.split('')
//     let workingArr = []
//     for (let i = 0; i < text.length; i++) {
//         if (workingArr.indexOf(split[i]) === -1) {
//             workingArr.push(split[i])
//         }
//     }
//     for (let x = 0; x < text.length; x++) {
//         if (workingArr.includes(text[x])){
//             working.push([text[x], text.split(text[x]).length - 1])
//             workingArr.splice(workingArr.indexOf(text[x]), 1)
//         }
//     }
//     return working
//   }

// // best answer

// const orderedCount = s =>
//   Array.from(s.split('').reduce((m, k) => m.set(k, m.has(k) ? m.get(k) + 1 : 1), new Map()));

const add = (a, b) => a + b;

console.log(add(3,5))