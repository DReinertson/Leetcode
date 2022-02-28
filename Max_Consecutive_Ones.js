/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let current = 0;
    let max = 0;
    for (let x = 0; x < nums.length; x++){
        if (nums[x] === 1){
            current ++;
            if (current > max){
                max = current;
            }            
        }
        else {
            current = 0;
        }
        console.log('current: ', current);
        console.log("max: ", max);
    }
    console.log('max after for: ', max);
   return max; 
};
