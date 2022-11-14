/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

 //Ok so there are three parts to this question

 //1. Are the strings the same length? 

 //2. Can you replace each of the letters in one string to get the second string? 

 //3. If there are repeating characters within the string, does the 2nd string have repeating characters in those same indices. So I need to keep track of the letter and the position of that letter. How could I define this quality? I feel like I could loop through both of them simultaneously and compare that way, but I'm not sure how to compare them. 

 //Could I create a map of cooresponding characters, change t after that map is created by 
var isIsomorphic = function(s, t) {

    //Are they the same length?
    if (s.length !== t.length){
        return false;
    }

    let map1 = new Map();

    for (let x = 0; x < s.length; x++){
        if (!map1.has(s[x])){
            map1.set(s[x], t[x]);
        } else {
            if (map1.get(s[x]) !== t[x]){
                return false;
            }
        }
    }

    let compare = new Set([...map1.values()]);

    if (compare.size === map1.size){
        return true;
    } else{
        return false;
    }

    
};

Runtime 116 ms Beats 63.92%
Memory 42.8 MB Beats 70.72%
