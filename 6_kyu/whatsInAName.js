// What's in a name?
// ..Or rather, what's a name in? For us, a particular string is where we are looking for a name.
// Task
// Test whether or not the string contains all of the letters which spell a given name, in order.

// The format
// A function passing two strings, searching for one (the name) within the other. ``function nameInStr(str, name){ return true || false }``
// Examples
// nameInStr("Across the rivers", "chris") --> true
//             ^      ^  ^^   ^
//             c      h  ri   s

// Contains all of the letters in "chris", in order.
// nameInStr("Next to a lake", "chris") --> false

// Contains none of the letters in "chris".
// nameInStr("Under a sea", "chris") --> false
//                ^   ^
//                r   s

// Contains only some of the letters in "chris".
// nameInStr("A crew that boards the ship", "chris") --> false
//              cr    h              s i
//              cr                h  s i  
//              c     h      r       s i
//              ...

// Contains all of the letters in "chris", but not in order.
// nameInStr("A live son", "Allison") --> false
//            ^ ^^   ^^^
//            A li   son

// Contains all of the correct letters in "Allison", in order, 
// but not enough of all of them (missing an 'l').

const nameInStr = (str, name) => {
    let filtered = name.split('').reduce( (r, e) => { if (r.indexOf(e) === -1) {r.push(e)}; return r; }, []).join('');
    let strSet = str.split('').reduce( (r, e, i) => {
        for (let i = 0; i < filtered.split('').length; i++) {
            debugger
            if (e === filtered[i]) {
                debugger
                r.push(e)
            }
        }
        return r;
    }, []).join('');

    let results = [];

    for (let i = 0; i < name.length; i++) {
        if (filtered.indexOf(name[i+1] > filtered.indexOf(name[i]))) {
            results.push(true)
        } else {
            results.push(false)
        }
    }
    return results
    // return !results.includes(false) ? true : false
}

console.log(nameInStr('A live son', 'Allison'))