/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    let map1 = new Map();
    
    for (let x in nums){
        if(map1.has(nums[x])){
            map1.set(nums[x], map1.get(nums[x]) + 1);
        } else{
            map1.set(nums[x], 1);
        }
    }
    
    console.log(map1);
    let arr = [...map1.values()].sort();
    console.log(arr);
};

//Need to figure out how to get top k elements. Would be able to retrieve key with highest value, using Math.max, unsure how to get multiple keys. 
