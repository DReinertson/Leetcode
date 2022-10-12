/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    
    if (nums.length === 0){
        return 0;
    }
    
    let map1 = new Map();
    let max = 0;
    let counter = 1;
    let sorted = nums.sort((a,b) => a-b);
    
    // console.log('sorted: ', sorted);
    
    for (let x in nums){
        map1.set(nums[x], 1);
    }
    
    // console.log(map1);
    
    for (let y = 0; y<sorted.length; y++){
        // console.log('y: ', y);
        // console.log('counter: ', counter);
        // console.log('max: ', max);
        // console.log("values: ", sorted[y], sorted[y+1]);
        if (sorted[y] === sorted[y+1]){
            continue;
        }
        else if (map1.has(sorted[y]+1)){
            counter++;
        } else{
            if (counter > max){
                max = counter;
            }
            counter = 1;
        }
    }
    
    if (counter > max){
        max = counter;
    }
    
    return max;
};

Runtime: 290 ms, faster than 53.66% of JavaScript online submissions for Longest Consecutive Sequence.
Memory Usage: 69.1 MB, less than 19.05% of JavaScript online submissions for Longest Consecutive Sequence.
