// Definition
// A Tidy number is a number whose digits are in non-decreasing order.

// Task
// Given a number, Find if it is Tidy or not 

const tidyNumber = (num) => {
    let answers = num.toString().split('').reduce( (r, e, i, a) => {
        if (i === 0 && a[i + 1] < e) {
            r.push('false')
        } else if (i === 0 && a[i + 1] > e) {
            r.push('true')
        } else if (a[i - 1] > e) {
            r.push('false')
        } else {
            r.push('true')
        }
        return r
    }, [])

    return answers.indexOf('false') !== -1 ? false : true
}