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
        // console.log("in while loop: ", left, '|', right);
        // console.log('values: ', s[left], '|', s[right]);
        // console.log('beginning of loop, mostFrequent: ', mostFrequent);
        length = right-left + 1;
        // console.log("length: ",  length);
        // console.log('---------------------------');
        if (map1.has(s[right])){
            // console.log('adding to s[right]: ', s[right], '|', map1.get(s[right]));
            map1.set(s[right], map1.get(s[right]) + 1);
            
        } else{
            map1.set(s[right], 1);
        }
        
        if (map1.get(s[right]) > mostFrequent){
            mostFrequent = map1.get(s[right]);
        }
        
        // console.log('if window is valid: ', length, '|', mostFrequent, '|', k);        
        if (length-mostFrequent <= k){
            // console.log('max before: ', max);
            max = length;
            // console.log('max after: ', max);
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
        
        
        // console.log('*****************************************');
    }
    
    return max;
    
};

Runtime: 183 ms, faster than 32.98% of JavaScript online submissions for Longest Repeating Character Replacement.
Memory Usage: 44.2 MB, less than 38.56% of JavaScript online submissions for Longest Repeating Character Replacement.
