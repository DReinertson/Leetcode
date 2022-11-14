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

Runtime 84 ms Beats 75.72%
Memory 41.6 MB Beats 88.88%
