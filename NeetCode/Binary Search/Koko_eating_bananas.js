/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

// Need to use binary search. where the rate is the target number, ranging from 1 (bananas per hour) to the max value of piles? 

var minEatingSpeed = function(piles, h) {

    let start = 1;
    let end = Math.max(...piles);
    
    while (start <= end){
        
        let mid = Math.floor((start + (end - start) / 2));
        
        let hours = 0; 
        
        for (let pile in piles){
            hours += Math.ceil(piles[pile]/mid);
        }
        
        if (hours > h){
            start = mid + 1;
        } else{
            end = mid - 1;
        }
    }
    
    return start;
    
    
    
};

Runtime: 365 ms, faster than 5.07% of JavaScript online submissions for Koko Eating Bananas.
Memory Usage: 49.3 MB, less than 5.46% of JavaScript online submissions for Koko Eating Bananas.
