Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

//Will create a map with the key:value pair of the alphabatized string:actual word. For instance, strs[0] will get stored in the map as "aet" : "eat", strs[1] will get added to the "aet" key. Should I store the value as an array, will I be able to add to this array? How do you add to an array that's stored in a map? map.set(map.get(key).push(value))?

var groupAnagrams = function(strs) {
    let map1 = new Map();
    for (let x in strs){
        let sorted = strs[x].split('').sort().join('');
        let arr = [];
        arr.push(sorted);
        console.log('sorted: ', sorted);
        if (map1.get(sorted)){
        }
    }
    
};
