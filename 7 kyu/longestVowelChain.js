// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// Good luck!

const solve = str => {
    return str.replace(/[bcdfghjklmnpqrstvwxyz]/gi, '-').split('-').reduce( (r, e) => {
        if (e[0]) r.push(e.length)
        return r;
    }, []).sort( (a, b) => b-a)[0]
}

// best answer

const solve = s => s.split(/[^aeiou]/).reduce((s,n)=> Math.max(s,n.length),0);
