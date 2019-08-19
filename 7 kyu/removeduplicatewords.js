// function removeDuplicateWords (s) {
//     // your perfect code...
//   }

const removeDuplicateWords = (str) => {
    return str.split(' ').reduce( (r, e) => {
        if (r.indexOf(e) === -1) {
            r.push(e)
        }
        return r;
    }, []).join(' ');
}

// best answer

const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')