// Introduction
// I have the par value for each hole on a golf course and my stroke score on each hole. I have them stored as strings because I wrote them down on a sheet of paper. Right now, I'm using those strings to calculate my golf score by hand. To do so, I use the following procedure:

// Take the difference between my actual score on hole 1 and the par of hole 1. Write down the result.

// For example, if I took 7 shots hole 1 when the par was 5, my score on that hole would be 7 - 5 = 2. If I got a hole-in-one on hole 1 when the par was 4, my score would be 1 - 4 = -3.
// Repeat the previous step for holes 2 through 18.

// Add up the results of all 18 previous calculations.

// Doing all this math by hand is really hard! Can you help make my life easier?

// Task Overview
// Write the function golf_score_calculator which accepts two strings and calculates the golf score of a game. Both strings will be of length 18, and each character in the string will be a number between 1 and 9 inclusive.

// Each digit in the first string will represent the par score of the hole corresponding to the sum of its index and 1. Each digit in the second string represents my actual score on that same hole.

function golfScoreCalculator(parList, scoreList){
    let newArr = [];
    for (let i = 0; i < parList.length; i++) {
        newArr.push(parseInt(scoreList.split('')[i]) - parseInt(parList.split('')[i]))
    }
    return newArr.reduce((a, b) => a + b)
}

// best answer

const golfScoreCalculator = (parList, scoreList) =>
  [...scoreList].reduce((result, score, index) => result += score - parList[index], 0)