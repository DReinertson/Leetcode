/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    let newStr = s.replace(/[^a-z0-9]/gi,'').toLowerCase();
    let y = newStr.length-1;    
    for (let x = 0; x < y; x++, y--){
        if (newStr[x] !== newStr[y]){
            return false;
        }
    }    
    return true;    
};
