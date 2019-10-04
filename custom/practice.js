console.log('=====r=rrr=rra=====eee======bb====b======='.split('=').filter(e=>e))

const setup = str => {
    return [...new Set(str.split('=').filter(e=>e).reduce((r, e) => {
        r = r.concat(e.split(''))
        return r;
    }, []))].reverse().join('')
}

console.log(setup('=====r=rrr=rra=====eee======bb====b======='))