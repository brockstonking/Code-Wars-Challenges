// Input:

// a string strng
// an array of strings arr
// Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

// a boolean true if all rotations of strng are included in arr (C returns 1)
// false otherwise (C returns 0)
// Examples:
// contain_all_rots(
//   "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

// contain_all_rots(
//   "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)
// Note:
// Though not correct in a mathematical sense

// we will consider that there are no rotations of strng == ""
// and for any array arr: contain_all_rots("", arr) --> true
// Ref: https://en.wikipedia.org/wiki/String_(computer_science)#Rotations

function containAllRots(strng, arr) {
    let testArr = [];
    let working = strng;
    let trues = [];
    let falses = [];
    for (let i = 0; i < strng.length; i++) {
        let split = working.split('');
        let popped = split.pop();
        let shifted = split.unshift(popped);
        testArr[i] = split.join('')
        working = split.join('')
    }
    for (let n = 0; n < testArr.length; n++) {
        if (arr.includes(testArr[n])) {
            trues.push(true)
        } else {
            falses.push(false)
        }
    }
    return falses.length > 0 ? false : true 
}

// best answer 

function containAllRots(str, arr) {
    for (var i = 0; i < str.length; i++) {
      if (arr.indexOf(str.slice(i) + str.slice(0, i)) === -1) {
        return false
      }
    }
    return true
  }






