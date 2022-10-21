/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

//Essentially I need to check s2 if it has any combination of the letters of s1, adjecent to each other. 
//The most straightforward method would be to use slice within a for loop. Slice creates the window, setting the variables equal to the length and the for loop moves the window. This would result in a O(n^2) time.
var checkInclusion = function(s1, s2) {
    
    let map1 = new Map();
    let left = 0;
    let right = 0;
    let length = s1.length;
    
    if (s1.length > s2.length){
        return false;
    }
    
    for (let x = 0; x < s1.length; x++){
        if (!map1.has(s1[x])){
            map1.set(s1[x], 1);
        } else{
            map1.set(s1[x], map1.get(s1[x])+1);
        }
    }
    
    while (right < s2.length){
        // console.log('in while loop, left and right: ', left, '|', right);
        // console.log('beginning length: ', length);
        // console.log('right: ', s2[right]);
        // console.log('map at beginning: ', map1);
        if (map1.get(s2[right]) > 0){
            length--;
            
        }
        map1.set(s2[right], map1.get(s2[right])-1);
        right++;
        
        
        
        if (length === 0){
            return true;
        }
        
        if (right - left === s1.length){
            if(map1.get(s2[left]) >= 0){
                length++;
            }
            
            map1.set(s2[left], map1.get(s2[left]) + 1);
            
            left++; 
        }
        
        // console.log('--------------------------');
        
        
        
    }
    
    return false;
    
};

Runtime: 95 ms, faster than 91.75% of JavaScript online submissions for Permutation in String.
Memory Usage: 44.1 MB, less than 70.93% of JavaScript online submissions for Permutation in String.
