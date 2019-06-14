// function stuff(arr) {
//     let type = ''
//     arr.reduce(function (e) {
//         if (typeof e === 'number') {
//             type = 'num'
//         } else {
//             type = 'string'
//         }
//     })
//     return type === 'num' ? arr.sort(function(a, b){return a - b}) : arr.sort();
// }

// question 3

function grader(correct, student){
    return student.reduce(function(r, e, i){ 
      if (e === correct[i]) {
        return r + 4
      } else if (e === '') {
        return r + 0
      } else {
        return r - 1
      }      
    }, 0)
  }

let correct = ['a', 'c', 'b', 'd']
let student = ['a', 'b', 'b', 'd']

console.log(grader(correct, student))