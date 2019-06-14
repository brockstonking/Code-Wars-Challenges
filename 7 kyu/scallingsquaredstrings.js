// You are given a string of n lines, each substring being n characters long. For example:

// s = "abcd\nefgh\nijkl\nmnop"

// We will study the "horizontal" and the "vertical" scaling of this square of strings.

// A k-horizontal scaling of a string consists of replicating k times each character of the string (except '\n').

// Example: 2-horizontal scaling of s: => "aabbccdd\neeffgghh\niijjkkll\nmmnnoopp"
// A v-vertical scaling of a string consists of replicating v times each part of the squared string.

// Example: 2-vertical scaling of s: => "abcd\nabcd\nefgh\nefgh\nijkl\nijkl\nmnop\nmnop"
// Function scale(strng, k, v) will perform a k-horizontal scaling and a v-vertical scaling.

// Example: a = "abcd\nefgh\nijkl\nmnop"
// scale(a, 2, 3) --> "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp"
// Printed:

// abcd   ----->   aabbccdd
// efgh            aabbccdd
// ijkl            aabbccdd
// mnop            eeffgghh
//                 eeffgghh
//                 eeffgghh
//                 iijjkkll
//                 iijjkkll
//                 iijjkkll
//                 mmnnoopp
//                 mmnnoopp
//                 mmnnoopp
// #Task:

// Write function scale(strng, k, v) k and v will be positive integers. If strng == "" return "".

function scale(strng, k, v) {
    const lines = strng.split('\n');
    const horizontal = lines.reduce( (r, e) => {
        r.push(e.split('').reduce( (r, e) => {
            let repeater = '';
            for (let i = 0; i < k; i++) {
                repeater += e
            }
            r.push(repeater)
            return r
        }, []).join(''))
        return r
    }, [])
    
    const horizontalAndVertical = horizontal.reduce( (r, e, i, a) => {
        let multiples = [];
        for (let i = 0; i < v; i++) {
            multiples = [...multiples, e]
        }

        r.push(multiples)
        return r
    }, [])

    let toReturn = [];
    for (let i = 0; i < horizontalAndVertical.length; i++) {
        for (let n = 0; n < horizontalAndVertical[i].length; n++) {
            toReturn.push(horizontalAndVertical[i][n])
        }
    }
    return strng === '' ? '' : toReturn.join('\n')
}

// best answer

const scale = (str, k, n) =>
  str
    .replace(/[^\n]/g,  c => Array(k + 1).join(c))
    .replace(/[^\n]+/g, c => Array(n + 1).join("\n" + c).slice(1));