// Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.

// Make sure that your function does not return a false positive by just checking just the day.

function isToday(date) {
    let dateDay = new Date().getDate();
    let dateMonth = new Date().getMonth();
    let dateYear = new Date().getFullYear();

    let pDay = date.getDate();
    let pMonth = date.getMonth();
    let pYear = date.getFullYear();

    if (dateDay === pDay && dateMonth === pMonth && dateYear === pYear) {
        return true
    } else {
        return false
    }
  }

// best answer

function isToday(date) {
    return new Date().toDateString() === date.toDateString();
  }
