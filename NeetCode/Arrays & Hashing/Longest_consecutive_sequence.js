/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    
    let map1 = new Map();
    let pos = 0;
    let counter = 1;
    let val = 1;
    let max = 1;
    
    if (nums.length === 0){
        return 0; 
    }
    
    for (let x in nums){
        map1.set(nums[x], 1);
    }
    
    // console.log(map1);
    
    while (pos < nums.length){
        // console.log('pos: ', pos);
        // console.log('nums[pos]: ', nums[pos]);
        // console.log('val: ', val);
        // console.log('nums[pos]+val: ', nums[pos]+val);
        // console.log('counter: ', counter);
        // console.log('max: ', max);
        if (map1.has(nums[pos]+val)){
            counter++;
            val++;
        } else{
            pos++;
            if (counter > max){
                max = counter;
            }
            counter = 1;
            val = 1;
        }
    }
    
    if (counter > max){
        max = counter;
    }
    
    return max;
    
};

Time Limit Exceeded
