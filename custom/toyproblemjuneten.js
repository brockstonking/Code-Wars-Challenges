const substrings = (str) => {
    return str.split('').reduce( (r, e, i) => {
        for (let n = 1; n <= str.split('').length; n++) {
            if (str.split('').slice(i, n).join('')) {
                r.push(str.split('').slice(i, n).join(''))
            }
        }
        return r
    }, [])
}

