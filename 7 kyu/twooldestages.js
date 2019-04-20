// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items.

// For example:

// twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]

function twoOldestAges(ages){
    let oldest = [];
    oldest.unshift(ages.reduce((a, b, i) => Math.max(a,b)))
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] === oldest[0]) {
            ages.splice(i, 1)
        }
    }
    oldest.unshift(ages.reduce((a, b, i) => Math.max(a,b)))
    return oldest
}

// best answer

function twoOldestAges(ages){
    return ages.sort(function(a,b){return a-b;}).slice(-2);
  }
