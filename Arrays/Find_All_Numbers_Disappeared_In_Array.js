/**
 * @param {number[]} nums
 * @return {number[]}
 */

//solution will be Θ(n^2)...
//this solution doesn't work because it overwrites values that could be used to identify. This solution would work if I pushed the values to another array. 

var findDisappearedNumbers = function(nums) {
    
    let length = nums.length;
    
    for (let x = 1; x <= length; x++){
        if (nums.indexOf(x) === -1){
            nums.push(x);
        }
    }
    
    return nums.slice(length);
    
    
};
