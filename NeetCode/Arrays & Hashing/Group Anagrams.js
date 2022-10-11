/**
 * @param {string[]} strs
 * @return {string[][]}
 */

//How to tell if they are anagram? do they contain the same number of each letter?

//Create map. Sort the strs[index]. Add first value to map. 
//Loop through the array, does that key exist in the map? If so, add the strs[index] to that key, if not, create a key with that sorted strs[index]. 

var groupAnagrams = function(strs) {
    
    let sort;
    let map1 = new Map();
    
    for (let x in strs){
        sort = strs[x].split('').sort().join('');
        if (x === 0){
            map1.set(sort, []);
            map1.get(sort).push(strs[x]);
        }
        else if (map1.has(sort)){
            map1.get(sort).push(strs[x]);
        }
        else{
            map1.set(sort, []);
            map1.get(sort).push(strs[x]);
        }
    }
    
    let arr = [...map1.values()];
    
    console.log(map1);
    return arr;
};

Runtime: 306 ms, faster than 12.75% of JavaScript online submissions for Group Anagrams.
Memory Usage: 62.4 MB, less than 5.12% of JavaScript online submissions for Group Anagrams.
