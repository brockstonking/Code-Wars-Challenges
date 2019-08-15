// In this Kata, you will be given a string and your task will be to return the length of the longest prefix that is also a suffix. A prefix is the start of a string while the suffix is the end of a string. For instance, the prefixes of the string "abcd" are ["a","ab","abc"]. The suffixes are ["bcd", "cd", "d"]. You should not overlap the prefix and suffix.

// for example:
// solve("abcd") = 0, because no prefix == suffix. 
// solve("abcda") = 1, because the longest prefix which == suffix is "a".
// solve("abcdabc") = 3. Longest prefix which == suffix is "abc".
// solve("aaaa") = 2. Longest prefix which == suffix is "aa". You should not overlap the prefix and suffix
// solve("aa") = 1. You should not overlap the prefix and suffix.
// solve("a") = 0. You should not overlap the prefix and suffix.
// All strings will be lowercase and string lengths are 1 <= length <= 500

// More examples in test cases. Good luck!

const solve = (str) => {
    let duplicates = 0;
    str.split('').reduce( (r, e, i, a) => {
        r.push(a.slice(0, i).join(''))
        return r;
    }, []).slice(1).concat(str.split('').reduce( (r, e, i, a) => {
        r.push(a.slice(i).join(''))
        return r;
    }, []).slice(1)).sort((a, b) => a.length-b.length).reverse().slice(2)
    .reduce( (r, e, i) => {
        if (r.indexOf(e) !== -1) {
            duplicates++
        }
        r.push(e)
        return r;
    }, []);
    return duplicates;
}

// returning varied test results. Recheck reduce structures. 

console.log(solve('abcd'))