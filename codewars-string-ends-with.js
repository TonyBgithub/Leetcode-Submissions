// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
//   check string lengths. slice string length where ending starts and compare the 2
  //variable that holds the ending
  let strEnding = str.slice(str.length - ending.length);
  if (strEnding === ending) {
    return true
  } else {
    return false
  }
  }