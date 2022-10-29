/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//What do I need for a binary search? 1. sorted array, 2. min and max value. 
//I could create another array that is the original before getting shifted. I could also find the rule, i.e. it has been shifted, and then use that for the binary search. I can't do this, because I don't know what the lowest number is at the time of creating the array

var search = function(nums, target) {
    
    let arr = [];
    let shift; 
    
    for (let x = 0; x < nums.length; x++){
        if (nums[x] > nums[x+1]){
            shift = x+1;
            arr = nums.slice(x+1).concat(nums.slice(0, x+1));
        }
    }
    
    console.log('arr: ', arr);
    
    let start = 0;
    let end = arr.length-1;
    
    while (start <= end){
        let mid = (start + end) / 2;
        
        if (mid === target){
            return mid + shift; 
        } else if (mid > target){
            end = mid -1;
        } else if (mid < target){
            start = mid + 1; 
        }
    }
    
    return -1;
    
};
