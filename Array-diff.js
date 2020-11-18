//This one comes from codewars

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  
    const newArray = [];
    
     for (var i = 0; i < b.length; i++){
     a.forEach(number => number !== b[i] ? newArray.push(number) : null)
   }
    
    if (b.length == "") { newArray.push(...a)}
    
     return newArray
   }