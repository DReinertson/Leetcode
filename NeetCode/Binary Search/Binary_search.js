/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let start = 0;
    let end = nums.length-1;
    
    while(start <= end){
        let mid = Math.floor((start + end) /2);
        
        if (nums[mid] === target){
            return mid;
        } else if (nums[mid] > target){
            end = mid-1;
        } else if (nums[mid] < target){
            start = mid + 1;
        }
    }
    
    return -1;
    
    
    
    
    
};

Runtime: 59 ms, faster than 99.10% of JavaScript online submissions for Binary Search.
Memory Usage: 44.3 MB, less than 98.91% of JavaScript online submissions for Binary Search.
