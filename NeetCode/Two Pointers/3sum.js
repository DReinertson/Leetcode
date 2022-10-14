/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//I know there will be three pointers. One at the beginning, one in the middle and one at the end. 
//I will require 2 for loops
//Will sort the original array
//Need logic to decide when to move each of the pointers. 
//If nums[left-pointer] equals 0, you can stop the loops. Since the sum has to equal 0, it can't equal 0 if the left most pointer isn't negative. 
var threeSum = function(nums) {
    
    let finalArr = new Set();
    //check length of array
    
    if (nums.length < 3){
        return finalArr;
    }
    
    //sort array
    
    nums.sort((a,b) => a-b);
    console.log('nums: ', nums);
    
    for (let l = 0; l < nums.length; l++){
        let m = l+1;
        
        if (nums[l] === 0 && nums[m] > 0){
            return Array.from(finalArr);
        }
        
        for (let r = nums.length-1; r > m; r--){
            let arr = [nums[l], nums[m], nums[r]];
            if (nums[l] + nums[m] + nums[r] > 0){
                continue;
            }
            if (nums[l] + nums[m] + nums[r] < 0){
                break;
            }
            if (nums[l] + nums[m] + nums[r] === 0 && !finalArr.has(arr)){
                console.log('set before adding: ', finalArr);
                console.log(finalArr.has(arr));
                finalArr.add(arr);
            }
        }
    }
    
    console.log('set after loops: ', finalArr);
    
    return Array.from(finalArr);
};
