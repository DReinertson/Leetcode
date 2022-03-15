/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    
    let expected = [...heights].sort(function(a,b){
        return a-b;
    });
    
    
    let count = 0;
    for (let x = 0; x < heights.length; x++){
        if (heights[x] !== expected[x]){
            count++;
        }
    }
    return count;
    
};
