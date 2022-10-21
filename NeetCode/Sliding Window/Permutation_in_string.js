/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

//Essentially I need to check s2 if it has any combination of the letters of s1, adjecent to each other. 
//The most straightforward method would be to use slice within a for loop. Slice creates the window, setting the variables equal to the length and the for loop moves the window. This would result in a O(n^2) time.
var checkInclusion = function(s1, s2) {
    
    let tempLength;
    let length = s1.length;
    // console.log('length: ', length);
    let end;
    let map1 = new Map();
    left = 0;
    right = 0;
    
    for (let x = 0; x < s1.length; x++){
        if (!map1.has(s1[x])){
            map1.set(s1[x], 1);
        } else {
            map1.set(s1[x], map1.get(s1[x])+1);
        }
    }
    
    let tempMap = new Map(map1);
    
    while (right < s2.length && left < s2.length){
        // console.log('in while left & right: ', left, '|', right);
        // console.log('values: ', s2[left], '|', s2[right]);
        // console.log('map: ', tempMap);
        // console.log('tempLength at beginning: ', tempLength);
        if (left >= right){
            if(map1.get(s2[left]) > 0){
                right = left + 1;
                tempLength = 1;
                tempMap.set(s2[left], tempMap.get(s2[left])-1);
                if (tempLength === length){
                    return true;
                }
            }
        }
        
        if (tempMap.get(s2[right]) > 0){
            tempLength++;
            tempMap.set(s2[right], tempMap.get(s2[right])-1);
            
            if (tempLength === length){
                return true;
            }
            right++;
        } else {
            left++;
            tempMap = new Map(map1);
            if (tempMap.has(s2[left])){
                tempMap.set(s2[left], tempMap.get(s2[left])-1);
                right = left+1;
                if (tempLength === length){
                    return true;
                }
            }
            
            tempLength = 1;
        }
        // console.log('tempLength at end: ', tempLength);        
        // console.log('-----------------------------');
    }
    
        
    return false;
    
};

Runtime: 5850 ms, faster than 9.28% of JavaScript online submissions for Permutation in String.
Memory Usage: 53.5 MB, less than 8.66% of JavaScript online submissions for Permutation in String.
