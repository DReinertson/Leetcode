Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let numMap = new Map();
    
    for (let x = 0; x < nums.length; x++){
        let remain = target - nums[x];
        
        if (numMap.get(remain) > -1 ){
            return[x, numMap.get(remain)]
        }
        
        
        numMap.set(nums[x], x);
    }
};
