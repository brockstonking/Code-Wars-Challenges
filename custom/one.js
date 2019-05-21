const merge_array = (array1, array2) => {
    return array1.concat(array2).reduce( (rt, e) => {
        if (rt.indexOf(e) === -1) {
            rt.push(e)
        }
        return rt
    }, [])
}

const get_random = (arr) => {
    return arr[Math.floor(Math.random()*arr.length)]
}

const move =(arr, pos1, pos2) => {
    let use1 = pos1 >= 0 ? pos1 : arr.length  - pos1 * -1
    let use2 = pos2 >= 0 ? pos2 : arr.length  - pos2 * -1
    
    if (use1 < use2) {
        return arr.reduce((r, e, i, a) => {
            if (i != use1) {
                r.push(e)
            } 
            if (i === use2) {
                r.push(a[use1])
            }
            return r
        }, [])
    } else if (pos1 < 0 && pos2 < 0){
        return arr.reduce((r, e, i, a) => {
            if (i != use1) {
                r.push(e)
            } 
            if (i === use2) {
                r.splice(use2, 0, a[use1])
            }
            return r
        }, [])
    }
    else {
        return arr.reduce((r, e, i, a) => {
            if (i != use1) {
                r.push(e)
            } 
            if (i === use2) {
                r.splice(use2 - 1, 0, a[use1])
            }
            return r
        }, [])
    }
}

