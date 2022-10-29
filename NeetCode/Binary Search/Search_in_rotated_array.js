/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//What do I need for a binary search? 1. sorted array, 2. min and max value. 
//I could create another array that is the original before getting shifted. I could also find the rule, i.e. it has been shifted, and then use that for the binary search. I can't do this, because I don't know what the lowest number is at the time of creating the array

var search = function(nums, target) {
    
      
    let start = 0;
    let end = nums.length-1;
    
    while (start <= end){
        let mid = Math.floor((start + end) / 2);
        
        if (nums[mid] === target){
            return mid; 
        }
        
        //check if it's in the left side
        if (nums[start] <= nums[mid]){
            if (nums[start] <= target && target <= nums[mid]){
                end = mid -1;
            } else{
                start = mid + 1;
            }
        } else {
            if(nums[mid] <= target && target <= nums[end]){
                start = mid + 1;
            } else {
                end = mid -1;
            }
        }
    }
    
    return -1;
    
};

Runtime: 96 ms, faster than 56.80% of JavaScript online submissions for Search in Rotated Sorted Array.
Memory Usage: 42.1 MB, less than 54.50% of JavaScript online submissions for Search in Rotated Sorted Array.
