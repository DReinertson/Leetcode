/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let start = 0;
    let end = nums.length-1;
    
    if (nums[start] === target){
        return start;
    }
    
    if (nums[start] === target){
        return end;
    }
    
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

Runtime: 111 ms, faster than 39.41% of JavaScript online submissions for Binary Search.
Memory Usage: 45.2 MB, less than 31.30% of JavaScript online submissions for Binary Search.
