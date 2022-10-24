/**
 * @param {string} s
 * @return {boolean}
 */

//Can i just count open and closed and make sure there are the same number of them? can I assume that an open will always occur first? Counting would only be possible if that assumption can be made. Cannot assume this

//Have to account for alternating characters '([])' should be false. 

var isValid = function(s) {
    
    for (let x = 0; x < s.length; x++){
        if(s[x] === '(' && s[x+1] !== ')'){
            return false;
        } else if (s[x] === '[' && s[x+1] !== ']'){
            return false;
        } else if(s[x] === '{' && s[x+1] !== '}'){
            return false;
        }
    }
    
    return true;
    
};
