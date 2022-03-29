/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let numMap = new Map();
    let finalArr = [];
    let num1;
    let targetNum;
    
    for (let x = 0; x < nums.length; x++){
        numMap.set(x, nums[x]);      
    }
    
    // console.log('numMap: ', numMap);
    
    let values = [...numMap.values()];
    
    for ([key, value] of numMap){
        // console.log('key: ', key, 'value: ', value);
        targetNum = target - value;
        
        // console.log('targetNum: ', targetNum);
        
        
        if (values.includes(targetNum) && key !== nums.indexOf(targetNum)){
            finalArr.push(key);
            finalArr.push(nums.indexOf(targetNum));
            break;
        }
    }
    
    return finalArr;
};
