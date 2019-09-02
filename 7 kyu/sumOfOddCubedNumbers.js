// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined/None/nil/NULL if any of the values aren't numbers.

const cubeOdd = arr => {
    return arr.filter(e => typeof e !== 'number').length > 0 
    ? undefined
    : arr.filter(e => e % 2 === 1 || e % 2 === -1).reduce( (r, e) => {
        r.push(e*e*e);
        return r;
    }, []).reduce( (r, e) => {
        r += e;
        return r;
    })
}

// best answer

let cubeOdd = a => {
    var isNumeric = a.every(x=>!isNaN(x))
    return isNumeric ? a.filter(n=>n%2).reduce((s,n)=>s+(n*n*n),0) : undefined
  }

