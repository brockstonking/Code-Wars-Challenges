// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

const getAverage = (arr) => {
    return Math.floor(arr.reduce( (r, e) => {
        r += e;
        return r;
    }, 0)/arr.length)
}

// best answer

function getAverage(marks){
    return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
  }