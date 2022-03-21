/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    
    let count = 0;
    
    
    while (count <= k){
        nums.push(nums[0]);
        nums.shift();
        count++
    }
};
