/**
 * @param {string} s
 * @return {boolean}
 */

//Can i just count open and closed and make sure there are the same number of them? can I assume that an open will always occur first? Counting would only be possible if that assumption can be made. Cannot assume this

//Have to account for alternating characters '([])' should be false. 

var isValid = function(s) {
    
    let test = [];
    let last;
    for (let x = 0; x < s.length; x++){        
        
        last = test[test.length-1];
        
        
        if (s[x] === '('){
            test.push(')');
        } else if (s[x] === '['){
            test.push(']');
        } else if (s[x] === '{'){
            test.push('}');
        } else if (s[x] === last){
            test.pop();
        } else {
            return false;
        }
    }
    
    return test.length === 0;
    
    
};

Runtime: 67 ms, faster than 94.94% of JavaScript online submissions for Valid Parentheses.
Memory Usage: 42 MB, less than 91.71% of JavaScript online submissions for Valid Parentheses.
