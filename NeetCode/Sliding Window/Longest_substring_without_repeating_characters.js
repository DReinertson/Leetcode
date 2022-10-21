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
    let targetLetter = s[left];
    
    
    
    while(right < s.length){
        if (right === 1){
            //initializing for s[left]
            tempLength++;
        }
        console.log("in while: ", left, ' ', right);
        console.log('s[right]: ', s[left], ' ', s[right],);
        
        if (s[right] === targetLetter){
            // console.log('in if statement 1');
            tempLength++;
            right++;
        } else if (s[right] !== targetLetter && letterChange < k){
            tempLength++;
            right++
            letterChange++;
        } else if (s[right] !== targetLetter && letterChange === k){
            if (tempLength > max){
                max = tempLength;
                // console.log('changing max: ', max);
                // console.log('-----------------------------');
            }
            left++;
            right = left + 1;
            letterChange = 0;
            tempLength = 1;
            targetLetter = s[left];

        }
        
    }
    
    // console.log('out of while loop: ', tempLength, ' ', max);
    
    if (tempLength > max){
        max = tempLength;
    }
    
    return max;
    
};
