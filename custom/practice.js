const ArrayMatching = strArr => {
    let setOne = strArr[0].split(',').reduce( (r, e) => {
        r.push(Number(e.replace(/\D/g,'')))
        return r;
    }, [])
    let setTwo = strArr[1].split(',').reduce( (r, e) => {
        r.push(Number(e.replace(/\D/g,'')))
        return r;
    }, [])
    let longestArr = setTwo.length > setOne.length ? setTwo : setOne
    let shortestArr = setTwo.length > setOne.length ? setOne : setTwo
    return `${longestArr.reduce( (r, e, i) => {
        r.push(shortestArr[i] ? e + shortestArr[i] : e)
        return r;
    }, []).join('-')}`
}
