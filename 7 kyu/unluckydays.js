// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

// Find the number of Friday 13th in the given year.

// Input: Year as an integer.

// Output: Number of Black Fridays in the year as an integer.

// Examples:

// unluckyDays(2015) == 3
// unluckyDays(1986) == 1
// Note: In Ruby years will start from 1593.

const unluckyDays = (year) => {
    let datesInYear = [];
    for (let i = 1; i <= 365; i++) {
        let date = new Date(year, 0, i)
        datesInYear.push([[date.getDay()], [date.getDate()]])
        
    };
    return datesInYear.reduce( (r, e) => {
        if (e[0][0] === 5 && e[1][0] === 13) {
            r = r + 1;
        }
        return r;
    }, 0);
}

// best answer 

function unluckyDays(year){
    let unlucky = 0;
    for (var i = 0; i < 12; i++) {
      if(new Date(year, i, 13).getDay() === 5){
        unlucky++;
      }
    }
    return unlucky;
  }


