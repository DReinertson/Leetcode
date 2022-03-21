/**
 * @param {number[]} nums
 * @return {boolean}
 */

//


var containsDuplicate = function(nums) {
    let counter = {};
    
    for (let x = 0; x < nums.length; x++){
        if(counter[nums[x]] !== undefined){            
            return true;
        } else{
            counter[nums[x]] = 0;
        }
    }
    
    return false;
};
