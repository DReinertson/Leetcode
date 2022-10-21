/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

//Essentially I need to check s2 if it has any combination of the letters of s1, adjecent to each other. 
//The most straightforward method would be to use slice within a for loop. Slice creates the window, setting the variables equal to the length and the for loop moves the window. This would result in a O(n^2) time.
var checkInclusion = function(s1, s2) {
    
    let compare;
    let length = s1.length;
    let end;
    s1 = s1.split('').sort().join('');
    let map1 = new Map();
    
    for (let x = 0; x < s1.length; x++){
        if (!map1.has(s1[x])){
            map1.set(s1[x], 1);
        } else {
            map1.set(s1[x], map1.get(s1[x])+1);
        }
    }
    for (let x = 0; x < s2.length; x++){
        if (map1.has(s2[x])){
            end = x + length;
            compare = s2.slice(x, end).split('').sort().join('');
            if(s1 === compare){
                return true;
            }        
        }
        
    }
    
    return false;
    
};
