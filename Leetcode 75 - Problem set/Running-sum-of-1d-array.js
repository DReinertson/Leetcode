/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = 0; 
    let current; 

    for (let x = 0; x < nums.length; x++){
        current = nums[x];
        sum += current;
        nums[x] = sum;
    }

    return nums;
};

41 ms runtime (top 0.03%)
30.4 memory (top 0.01%)
