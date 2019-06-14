// Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(arr) {
    const numbers = arr.reduce( (r, e, i, a) => {
        if (r.indexOf(e) === -1) {
            r.push(e)
        }
        return r
    }, [])
    const occurences = numbers.reduce( (rt, el, index, ar) => {
        rt.push(arr.reduce( (e, i, a, r) => {
            if (i === el) {
                e.push(i)
            }
            return e
        }, []))
        return rt
    }, [])

    return occurences.reduce( (r, e, i, a) => {
        if (e.length%2 != 0) {
            r.push(e[0])
        }
        return r
    }, [])[0]
}

// best answer

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);