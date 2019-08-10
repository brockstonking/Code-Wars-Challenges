// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

// rowSumOddNumbers(1); // 1
// rowSumOddNumbers(2); // 3 + 5 = 8

const rowSumOddNumbers = (num) => {
    let firsts = [1];
    for (let i = 0; i <= num * num; i += 2) {
        firsts.push(firsts[firsts.length - 1] + i)
    }
    firsts.shift();
    let sumArray = [];
    for (let i = firsts[num - 1]; sumArray.length < num; i++) {
        if (i % 2 === 1) {
            sumArray.push(i)
        }
    }
    let sum = sumArray.reduce( (r, e) => {
        r += e;
        return r;
    }, 0)
    return sum;
}

// best answer

function rowSumOddNumbers(n) {
    return Math.pow(n, 3);
  }
  