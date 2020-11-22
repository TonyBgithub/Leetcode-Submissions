// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

 

// Example 1:

// Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
// Output: "Sao Paulo" 
// Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".
// Example 2:

// Input: paths = [["B","C"],["D","B"],["C","A"]]
// Output: "A"
// Explanation: All possible trips are: 
// "D" -> "B" -> "C" -> "A". 
// "B" -> "C" -> "A". 
// "C" -> "A". 
// "A". 
// Clearly the destination city is "A".
// Example 3:

// Input: paths = [["A","Z"]]
// Output: "Z"

/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const arrivals = paths.map(a => a[0]);
     const destinations = paths.map(a => a[1]);
     
     return destinations.filter(d => arrivals.indexOf(d) === -1).join('');
 };
 
 /* 
 1 - create two arrays. The first stores the arrivals. The second stores the destinations.
 2 - inside the destinations, filter out the item that does not have a corresponding value inside arrivals.
 3- the join() method returns a string without using the separator if there is only one item in the array.
 */