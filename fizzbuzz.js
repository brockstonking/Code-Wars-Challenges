// Return an array containing the numbers from 1 to N, where N is the parametered value. N will never be less than 1 (in C#, N might be less then 1).

// C# ONLY: If N is smaller then or equal to 0, throw an ArgumentOutOfRangeException!
// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value 'Fizz' instead
// If the value is a multiple of 5: use the value 'Buzz' instead
// If the value is a multiple of 3 & 5: use the value 'FizzBuzz' instead

// Return an array

const fizzbuzz = (n) => {
    let newArr = [];
    for (let i = 1; i <= n; i++) {
        newArr.push(i%3===0&&i%5===0?"FizzBuzz":i%3===0?"Fizz":i%5===0?"Buzz":i)
    }
    return newArr
}


// best answer

function fizzbuzz(n)
{
  var i = 1, arr = [];
  while(i <= n) {
    var fizz = (i % 3 == 0);
    var buzz = (i % 5 == 0);
    if(fizz || buzz) {
      arr.push((fizz?"Fizz":"") + (buzz?"Buzz":""));
    }
    else {
      arr.push(i);
    }
    i++;
  }
  return arr;
}

var fizzify = fizzbuzz;
