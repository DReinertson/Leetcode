/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    let counter = {};
    
    for (let x = 0; x < nums.length; x++){
        if(counter[nums[x]]){
            counter[nums[x]]++;
        } else{
            counter[nums[x]] = 1;
        }
    }
    
    for (let y in counter){
        if (counter[y] === 1 ){
            return y;
        }
    }
    
};
