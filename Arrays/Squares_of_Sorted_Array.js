/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortedSquares = function(nums) {
    
    //Initialize new array
    let newArr = [];
    
    //Push squared values to new array
    for (x in nums){
        newArr.push(Math.pow(nums[x], 2));
    }
    
    //Sort New array in non-decreasing order
    newArr.sort(function(a,b){
        return a - b;
    })
    
    return newArr;
    
};
