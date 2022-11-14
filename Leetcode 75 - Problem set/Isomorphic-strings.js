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
        if (!map1.has(t[x])){
            map1.set(t[x], s[x]);
        }
    }

    console.log('map1: ', map1);

    for (let y = 0; y < t.length; y++){
        console.log('t before: ', t);
        t = t.replace(t[y], map1.get(t[y]));
        console.log('t after: ', t);
        console.log('----------------');
    }

    console.log('t final: ', t)
    console.log('s: ', s);

    if (s === t){
        return true;
    } else {
        return false;
    }

    
};
