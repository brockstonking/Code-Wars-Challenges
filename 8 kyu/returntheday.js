// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"

function whatday(num) { 
    return num === 1 ? 'Sunday' : num === 2 ? 'Monday' : num === 3 ? 'Tuesday' : num === 4 ? 'Wednesday' : num === 5 ? 'Thursday' : num === 6 ? 'Friday' : num === 7 ? 'Saturday' : 'Wrong, please enter a number between 1 and 7'
  }

  // best answer

  function whatday(num) { 
    switch(num) {
      case 1:
        return "Sunday";
      case 2:
        return "Monday";
      case 3:
        return "Tuesday";
      case 4:
        return "Wednesday";
      case 5:
        return "Thursday";
      case 6:
        return "Friday";
      case 7:
        return "Saturday";
      default:
        return 'Wrong, please enter a number between 1 and 7';
    }
  }