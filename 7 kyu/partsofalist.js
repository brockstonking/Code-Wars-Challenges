// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

// Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
// Each part will be in a string
// Elements of a pair must be in the same order as in the original array.
// Examples of returns in different languages:
// a = ["az", "toto", "picaro", "zone", "kiwi"] -->

// [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]]

// or

// a = {"az", "toto", "picaro", "zone", "kiwi"} -->

// {{"az", "toto picaro zone kiwi"}, {"az toto", "picaro zone kiwi"}, {"az toto picaro", "zone kiwi"}, {"az toto picaro zone", "kiwi"}}

// or

// a = ["az", "toto", "picaro", "zone", "kiwi"] -->

// [("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]

// or

// a = [|"az", "toto", "picaro", "zone", "kiwi"|] -->

// [("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]

// or

// a = ["az", "toto", "picaro", "zone", "kiwi"] -->

// "(az, toto picaro zone kiwi)(az toto, picaro zone kiwi)(az toto picaro, zone kiwi)(az toto picaro zone, kiwi)"

// You can see other examples for each language in "Your test cases"

const partlist = (arr) => {
    let newArr = [];
    // I'm not sure how to push a certain number of elements together. 
    for (let i = 1; i < arr.length; i++) {
        let working = []
        working[0] = (arr.slice(0, i).join(' '))
        working[1] = (arr.slice(i).join(' '))
        newArr.push(working)
    } 
    return newArr
}

// best answer

var partlist=a=>a.map((v,i)=>[a.slice(0,i).join(' '),a.slice(i).join(' ')]).slice(1)




