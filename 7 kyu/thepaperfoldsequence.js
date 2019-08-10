// Wikipedia: The regular paperfolding sequence, also known as the dragon curve sequence, is an infinite automatic sequence of 0s and 1s defined as the limit of the following process:

// 1
// 1 1 0
// 1 1 0 1 1 0 0
// 1 1 0 1 1 0 0 1 1 1 0 0 1 0 0

// At each stage an alternating sequence of 1s and 0s is inserted between the terms of the previous sequence.

// Define a generator function paperFold that sequentially generates the values of this sequence.

// It will be tested for up to 1 000 000 values.

const paperFold = (digits) => {
    let num = [1, 1, 0];
    let lastTwo = [num[num.length - 2], num[num.length - 1]].join('');
    for (let i = 0; i < digits; i++) {
        lastTwo === '11'
        ? num.push(1, 1, 0, 1)
        : lastTwo === '01'
        ? num.push(1, 0, 0, 1)
        : lastTwo === '10'
        ? num.push(1, 1, 0, 0)
        : lastTwo === '00'
        ? num.push(1, 0, 0, 0)
        : null
    }
    return num.reduce( (r, e, i) => {
        if (i < digits) {
            r.push(e)
        }
        return r;
    }, [])
}

console.log(paperFold(15))