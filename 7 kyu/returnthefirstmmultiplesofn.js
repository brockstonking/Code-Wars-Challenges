// Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

// Ex.

// multiples(3, 5)
// should return

// [5, 10, 15]

const multiples = (m, n) => {
    let multiples = [];
    for (let i = 1; multiples.length < m; i++) {
        if (i % n === 0) {
            multiples.push(i)
        }
    };
    return multiples;
}


// code academy kept timing out on code run. 