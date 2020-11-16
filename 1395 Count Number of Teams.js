/* There are n soldiers standing in a line. Each soldier is assigned a unique rating value.

You have to form a team of 3 soldiers amongst them under the following rules:

Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k]).
A team is valid if:  (rating[i] < rating[j] < rating[k]) or (rating[i] > rating[j] > rating[k]) where (0 <= i < j < k < n).
Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams). 

Example 1:

Input: rating = [2,5,3,4,1]
Output: 3
Explanation: We can form three teams given the conditions. (2,3,4), (5,4,1), (5,3,1). 
*/

var numTeams = function(rating) {
    
    let count = 0;
    rating.forEach((item, idx) => {
        const first = item; 
        for (let i = idx + 1, len = rating.length; len > i; i++ ) {
            const second = rating[i];
            if (first > second) {
                count += rating.slice(i + 1).filter(item => item < second).length;
            } else {
                count += rating.slice(i + 1).filter(item => item > second).length;
            }  
        }
    }); 
    
    return count;
};