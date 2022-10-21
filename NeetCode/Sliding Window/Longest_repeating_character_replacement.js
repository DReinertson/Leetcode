/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

//Use a while loop, sliding window problem. 
//Could use nested for loops, but that defeats the purpose of doing sliding window problems


var characterReplacement = function(s, k) {
    
    
    let max = 0;
    let left = 0;
    let right = 0;
    let mostFrequent = 0;
    let map1 = new Map();
    let length;
    
    while (right < s.length){
        length = right-left + 1;
        if (map1.has(s[right])){
            map1.set(s[right], map1.get(s[right]) + 1);
            
        } else{
            map1.set(s[right], 1);
        }
        
        if (map1.get(s[right]) > mostFrequent){
            mostFrequent = map1.get(s[right]);
        }
              
        if (length-mostFrequent <= k){
            max = length;
        } else {
            map1.set(s[left], map1.get(s[left]) -1);
            if (map1.get(s[left]) < map1.get(s[right])){
                mostFrequent = map1.get(s[right]);
            } else {
                mostFrequent = map1.get(s[left]);
            }
            left++
            
        }
        right++;
        
    }
    
    return max;
    
};

Runtime: 140 ms, faster than 52.42% of JavaScript online submissions for Longest Repeating Character Replacement.
Memory Usage: 44.1 MB, less than 38.88% of JavaScript online submissions for Longest Repeating Character Replacement.
