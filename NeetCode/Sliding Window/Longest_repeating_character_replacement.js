/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

//Use a while loop, sliding window problem. 
//Could use nested for loops, but that defeats the purpose of doing sliding window problems


var characterReplacement = function(s, k) {
    
    
    let max = 0;
    let tempLength = 0;
    let letterChange = 0; 
    let left = 0;
    let right = left+1;
    let targetLetter;
    
    
    
    while(right < s.length){
        targetLetter = s[left];
        if (right === 1){
            tempLength++;
        }
        console.log("in while: ", left, ' ', right);
        //Need conditions that will move left + 1 and right + 1. 
        //Conditions need to include a comparison to k, to track how many changes have occurred
        
        if (s[left] === s[right] && letterChange < k){
            tempLength ++;
            right ++;
        } else if (s[left] === s[right] && letterChange === k) {
            
        } else if(s[left] !== s[right] && letterChange < k){
            tempLength++;
            right++;
            letterChange++;
        } else if(s[left] !== s[right] && letterChange === k){
            left++;
        }
    }
    
    if (tempLength > max){
        max = tempLength;
    }
    
    return max;
    
};
