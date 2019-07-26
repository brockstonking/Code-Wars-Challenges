// Write three functions add, subtract, and multiply such that each require two invocations.

// For example:

// add(3)(4)      // 7
// subtract(3)(4) // -1
// multiply(3)(4) // 12
// Once you have done this. Write a function apply that takes one of these functions as an argument and invokes it.

// For example:

// apply(add)(3)(4)      // 7
// apply(subtract)(3)(4) // -1
// apply(multiply)(3)(4) // 12

const add = (...args) => {
    if (args.length > 1) {
        return args.reduce( (r, e) => {
            r += e
            return r;
        }, 0)
    } else if (args.length < 2) {
        return c => args[0] + c
    }
}

const subtract = (...args) => {
    if (args.length > 1) {
        return args.reduce( (r, e) => {
            r -= e
            return r;
        }, args[0])
    } else if (args.length < 2) {
        return c => args[0] - c
    }
}

const multiply = (...args) => {
    if (args.length > 1) {
        return args.reduce( (r, e) => {
            r *= e
            return r;
        }, 1)
    } else if (args.length < 2) {
        return c => args[0] * c
    }
}

const apply = (op) => {
    return op;
}

// best answer

const add = (a) => (b) => a + b;
const subtract = (a) => (b) => a - b;
const multiply = (a) => (b) => a * b;
const apply = (fn) => fn;
