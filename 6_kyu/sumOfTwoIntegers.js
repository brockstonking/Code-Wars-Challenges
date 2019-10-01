// Task
// Given Two integers a , b , find The sum of them , BUT You are not allowed to use the operators + and -

// Notes
// The numbers (a,b) may be positive , negative values or zeros .

// Returning value will be an integer .

// Javascript: the Array reduce methods are disabled, along with eval, require, and module .
// Input >> Output Examples
// 1- Add (5,19) ==> return (24) 

// 2- Add (-27,18) ==> return (-9)

// 3- Add (-14,-16) ==> return (-30)

const add = (num1, num2) => {
    return new Array(num1).fill(true).concat(new Array(num2).fill(true)).length
}

console.log(add(5,19))