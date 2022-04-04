/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    let count = [];
    
    for(let x = 0; x < strs[0].length; x++){
        for (let y = 1; y < strs.length; y++){
            if(strs[y][x] !== strs[y-1][x]){
                return count.join('');
            }
        }
        count.push(strs[0][x]);
    }
    
    return count.join('');
};
