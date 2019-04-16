// Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified. If the item occurs more than once in a sequence, return the item after the first occurence. This should work for a sequence of any type.

// When the item isn't present or nothing follows it, the function should return nil in Clojure and Elixir, Nothing in Haskell, undefined in JavaScript, None in Python.

// nextItem([1, 2, 3, 4, 5, 6, 7], 3) # 4
// nextItem("testing", "t") # "e"

const myArr = [1,2,3,4,5]
function nextItem(xs, item) {
    //   console.log(xs)
    //     const itemIndex = xs.indexOf(item);
    //     if(itemIndex > -1 && itemIndex < xs.length -1){
    //         return xs[itemIndex + 1]
    //     }
            let there = false;
        for(var x of xs){
            console.log(x)
            if(there) return x;
            if(x === item) there = true;
        }
    
    }

    
    // best answer

    function nextItem(xs, item) {
        var found = false;
        for (var x of xs) {
          if (found) return x;
          if (x == item) found = true;
        }
        return undefined;
      }