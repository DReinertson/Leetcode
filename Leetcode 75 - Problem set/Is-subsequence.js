/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {

    let pos = 0; 

    for (let x = 0; x < t.length; x++){
        if (t[x] === s[pos]){
            pos++;
        }
    }

    return pos === s.length;
    
};

Runtime 117 ms Beats 12.60%
Memory 42 MB Beats 55.78%
