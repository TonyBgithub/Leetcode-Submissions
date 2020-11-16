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