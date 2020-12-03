// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''


//Solution 1: 
function list(names) {
  let namesList = [];
  let lastName = [];

  for (let i = 0; i < names.length; i++) {
    if (i + 1 !== names.length) {
      namesList.push(names[i].name);
    } else {
      lastName.push(names[i].name);
    }
  }
  if (namesList.length === 0) {
    return lastName.join();
  } else return `${namesList.join(", ")} & ${lastName}`;
}

//Solution 2 with reduce: 
// function list(names){
//   return names.reduce(function(prev, current, index, array){
//     if (index === 0){
//       return current.name
//     } 
//     else if (index === array.length -1){
//       return prev + ' & ' + current.name;
//     }
//     else {
//       return prev + ', ' + current.name;
//     }
//   }, '')
//   // '' above is the initial value. When there is no name, it returns an empty string. This validates the case 
//   //when there is no name, since we need an empty string.
  
//   //current.name refers to the current object, and we tap into its name property.
// }