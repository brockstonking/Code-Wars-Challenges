const rowWeights = (arr) => {
    let one = arr.reduce( (r, e, i) => {
        if (i % 2 === 0) {
            r += e
        }
        return r
    }, 0);
    let two = arr.reduce( (r, e, i) => {
        if (i % 2 === 1) {
            r += e
        }
        return r
    }, 0);
    return [one, two]
}