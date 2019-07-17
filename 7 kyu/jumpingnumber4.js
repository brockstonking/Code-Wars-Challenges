// Definition
// Jumping number is the number that All adjacent digits in it differ by 1.

// Task
// Given a number, Find if it is Jumping or not .

// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// Number passed is always Positive .

// Return the result as String .

// The difference between ‘9’ and ‘0’ is not considered as 1 .

// All single digit numbers are considered as Jumping numbers.

// Input >> Output Examples
// jumpingNumber(9) ==> return "Jumping!!"
// Explanation:
// It's single-digit number
// jumpingNumber(79) ==> return "Not!!"
// Explanation:
// Adjacent digits don't differ by 1
// jumpingNumber(23) ==> return "Jumping!!"
// Explanation:
// Adjacent digits differ by 1
// jumpingNumber(556847) ==> return "Not!!"
// Explanation:
// Adjacent digits don't differ by 1
// jumpingNumber(4343456) ==> return "Jumping!!"
// Explanation:
// Adjacent digits differ by 1
// jumpingNumber(89098) ==> return "Not!!"
// Explanation:
// Adjacent digits don't differ by 1
// jumpingNumber(32) ==> return "Jumping!!"
// Explanation:
// Adjacent digits differ by 1

const jumpingNumber = (num) => {
    let answers = num.toString().split('').reduce( (r, e, i, a) => {
        if (i != a.length - 1) {
            if (parseInt(a[i + 1]) === parseInt(e) + 1 || parseInt(a[i + 1]) === parseInt(e) - 1) {
                r.push(true)
            } else {
                r.push(false)
            }
        }
        return r
    }, [])
    return answers.indexOf(false) === -1 ? 'Jumping!!' : 'Not!!'
}

// best answer

function jumpingNumber(n){
    return [...n+''].every((x,i,a)=>!i||x==+a[i-1]+1||x==a[i-1]-1)?'Jumping!!':'Not!!'
  }