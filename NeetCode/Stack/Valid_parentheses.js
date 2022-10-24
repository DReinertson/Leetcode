/**
 * @param {string} s
 * @return {boolean}
 */

//Can i just count open and closed and make sure there are the same number of them? can I assume that an open will always occur first? Counting would only be possible if that assumption can be made. Cannot assume this

//Have to account for alternating characters '([])' should be false. 

var isValid = function(s) {
    
    let map1 = new Map();
    
    for (let x = 0; x < s.length; x++){
        if (!map1.has(s[x])){
            map1.set(s[x], 1);
        } else{
            map1.set(s[x], map1.get(s[x]) + 1);
        }
    }
    
    console.log(map1);
    
    if(map1.get('(') === map1.get(')') && map1.get('{') === map1.get('}') && map1.get('[') === map1.get(']')){
        return true;
    } else{
        return false;
    }
    
};
