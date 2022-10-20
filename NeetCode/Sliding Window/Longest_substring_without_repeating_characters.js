/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let tempArr = [];
    let maxLength;
    let left = 0;
    let right = left + 1;
    
    if (s.length === 0){
        return 0;
    }
    
    tempArr.push(s[left]);
    
    maxLength = tempArr.length;
    console.log('length: ', s.length);
    
    while (right < s.length){
        console.log('in while loop left: ', left, ' right: ', right);
        console.log('tempArr at beginning of loop: ', tempArr);
        if (s[right] === s[right+1]){
            console.log('sright = sright+1: ', s[right], ' ', s[right+1]);
            if (tempArr.indexOf(s[right]) === -1){
                tempArr.push(s[right]);                
            }
            left = right+1;
            right = left+1;
            if (tempArr.length > maxLength){
                console.log('---------------');
                console.log('in s[right] === s[right+1], changing max length');
                console.log("maxLength before: ", maxLength, " tempArr: ", tempArr);
                maxLength = tempArr.length;
            }
            tempArr = [s[left]];
        }
        else if (tempArr.indexOf(s[right]) === -1){
            tempArr.push(s[right]);
            right++;
        } else{
            if (tempArr.length > maxLength){
                maxLength = tempArr.length;
            }
            
            tempArr.shift();
            left++;
        }
    }
    
    if (tempArr.length > maxLength){
        maxLength = tempArr.length;
    }
    
    return maxLength;
    
};
