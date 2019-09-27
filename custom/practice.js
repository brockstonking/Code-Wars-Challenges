const scrambled = (word1, word2) => {
    return word2.split('').reduce((r, e, i) => {
        let sliceable = word1.split('');
        if (sliceable.includes(e)) {
            debugger
            r.push();
            sliceable.splice(sliceable.indexOf(e), 1)
        } else {
            debugger
            r.push(false)
        }
        return r;
    }, [])
}

console.log(scrambled('heyaef', 'yehffao'))