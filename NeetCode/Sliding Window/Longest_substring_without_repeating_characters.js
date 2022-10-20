/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let tempArr = new Set();
    let maxLength;
    let left = 0;
    let right = left + 1;
    
    if (s.length === 0){
        return 0;
    }
    
    tempArr.add(s[left], 1);
    
    console.log(!tempArr.has(s[left]));
    
    maxLength = tempArr.size;
    
    while (right < s.length){
        console.log('in while loop left: ', left, ' right: ', right);
        if (s[right] === s[right+1]){
            console.log('right before the error: ', right, s[right]);
            console.log('has: ', tempArr.has(s[right]));
            if (!tempArr.has(s[right])){
                tempArr.add(s[right], 1);
            }
            left = right+1;
            right = left+1;
            if (tempArr.size > maxLength){
                maxLength = tempArr.size;
            }
            tempArr = new Set();
            tempArr.add(s[left], 1);
            tempArr = [s[left]];
        }
        else if (!tempArr.has(s[right])){
            tempArr.add(s[right], 1);
            right++;
        } else{
            if (tempArr.size > maxLength){
                maxLength = tempArr.size;
            }
            
            tempArr.delete(s[right]);
            left++;
        }
    }
    
    if (tempArr.size > maxLength){
        maxLength = tempArr.size;
    }
    
    return maxLength;
    
};
