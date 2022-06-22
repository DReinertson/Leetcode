/**
 * @param {number[]} nums
 * @return {boolean}
 */
 
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 
var containsDuplicate = function(nums) {
    let map1 = new Map();
    for (let x in nums){
        if (map1.get(nums[x])){
            map1.set(nums[x], map1.get(nums[x])+1);
        } else{
            map1.set(nums[x], 1);
        }
        if (map1.get(nums[x]) > 1){
            return true;
        }
    }
    
    return false
};
