/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    let map1 = new Map();
    let finalArr = [];
    
    //create map of each number in nums array with frequency of number. 
    for (let x in nums){
        if(map1.has(nums[x])){
            map1.set(nums[x], map1.get(nums[x]) + 1);
        } else{
            map1.set(nums[x], 1);
        }
    }
    
    // console.log(map1);
    // let arr = [...map1.values()].sort();
    // let arr = Array.from(map1, ([key, value]) => {return {[key]: value}}).sort();
    // console.log(arr);
    
    let sortedMap = new Map([...map1].sort((a,b) => b[1] - a[1]));
    
    // console.log('sortedMap: ', sortedMap);
    
    for (let [key, value] of sortedMap){
        if (finalArr.length !== k){
            finalArr.push(key);
        } else {
            return finalArr;
        }
    }
    
    return finalArr;
Runtime: 108 ms, faster than 73.66% of JavaScript online submissions for Top K Frequent Elements.
Memory Usage: 46.8 MB, less than 34.18% of JavaScript online submissions for Top K Frequent Elements.
};
