// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

const myArr = [1,-4,7,12]

function positiveSum(arr) {
    const positives = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positives.push(arr[i])
        }
    }
    return positives.reduce((rt, ce) => {return rt + ce}, 0)

}

// best answer

function positiveSum(arr) {
    return arr.filter(x => x > 0).reduce((a, b) => a+b, 0);
  }
  