function firstReverseTry(arr) {
    //coding and coding..
    if (arr.length === 0 || arr.length === 1) {
      return arr;
    }
      
      let first = arr.shift();
      let last = arr.pop();
      arr.splice(0,0,last);
      arr.splice(arr.length, 0, first);
      
      return arr
    
  }