/**
 * @param {string} s
 * @return {boolean}
 */


var isValid = function(s) {
    let check = [];

    for (let x = 0; x < s.length; x++){
        if (s[x] === ')'){
            if (check[check.length - 1] === '('){
                check.pop();
            } else{
                return false;
            }
        }

        else if (s[x] === '}'){
            if (check[check.length - 1] === '{'){
                check.pop();
            } else{
                return false;
            }
        }

        else if (s[x] === ']'){
            if (check[check.length - 1] === '['){
                check.pop();
            } else{
                return false;
            }
        }

        else{
            check.push(s[x]);
        }
    }

    if (check.length === 0){
        return true;
    } else{
        return false;
    }
    
};

Runtime 126 ms Beats 15.67%
Memory 42 MB Beats 91.68%
    
https://leetcode.com/problems/valid-parentheses/submissions/849272637/
