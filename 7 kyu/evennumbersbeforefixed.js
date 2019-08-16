
// Given array of integers sequence and some integer fixedElement, output the number of even values in sequence before the first occurrence of fixedElement or -1 if and only if fixedElement is not contained in sequence.

// Input/Output
// [input] integer array sequence

// A non-empty array of positive integers.

// 4 ≤ sequence.length ≤ 100

// 1 ≤ sequence[i] ≤ 9

// [input] integer fixedElement

// An positive integer

// 1 ≤ fixedElement ≤ 9

// [output] an integer

// Example
// For sequence = [1, 4, 2, 6, 3, 1] and fixedElement = 6, the output should be 2.

// There are 2 even numbers before 6: 4 and 2

// For sequence = [2, 2, 2, 1] and fixedElement = 3, the output should be -1.

// There is no 3 appears in sequence. So returns -1.

// For sequence = [1, 3, 4, 3] and fixedElement = 3, the output should be 0.

// 3 appears in sequence, but there is no even number before 3.

const evenNumbersBeforeFixed = (arr, fixed) => {
    return arr.includes(fixed) ? arr.reduce( (r, e, i) => {
        if (e % 2 === 0 && i < arr.indexOf(fixed)) {
            r++;
        }
        return r;
    }, 0) : -1;
}

// best answer

function evenNumbersBeforeFixed(sequence, fixedElement) {
    if(sequence.indexOf(fixedElement) == 0) return 0;
    let s = sequence.splice(0, sequence.indexOf(fixedElement));
    if(s.length == 0)return -1;
    return s.filter((a)=>(a%2 == 0)).length;
  }