/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//Solution works, but times out on large data sets. Trying to make two arrays and concat them, but it won't return the proper array. 
var rotate = function(nums, k) {
    
   let count = 0;
    
    while(count < k){
        nums.unshift(nums[nums.length-1]);
        nums.pop();
        count++;
    }
};
