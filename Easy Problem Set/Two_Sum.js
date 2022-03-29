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
