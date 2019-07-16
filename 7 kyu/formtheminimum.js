const minValue = (arr) => {
    return Number(arr.reduce( (r, e, i) => {
        if (r.indexOf(e) === -1) {
            r.push(e)
        }
        return r
    }, []).sort(function(a, b){return a-b}).join(''))
}