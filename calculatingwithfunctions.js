// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// JavaScript:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Ruby:

// seven(times(five)) # must return 35
// four(plus(nine)) # must return 13
// eight(minus(three)) # must return 5
// six(divided_by(two)) # must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Divison should be integer division, e.g eight(dividedBy(three()))/eight(divided_by(three)) should return 2, not 2.666666...

function zero(o){return o ? o(0) : 0}
function one(o) {return o ? o(1) : 1}
function two(o) {return o ? o(2) : 2}
function three(o) {return o ? o(3) : 3}
function four(o) {return o ? o(4) : 4}
function five(o) {return o ? o(5) : 5}
function six(o) {return o ? o(6) : 6}
function seven(o) {return o ? o(7) : 7}
function eight(o) {return o ? o(8) : 8}
function nine(o) {return o ? o(9) : 9}

function plus(number) {return number + cbNumber}
function minus(number) {return number - cbNumber}
function times(number) {return number * cbNumber}
function dividedBy(number) {return number / cbNumber}