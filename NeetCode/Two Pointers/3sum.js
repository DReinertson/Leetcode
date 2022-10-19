/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//I know there will be three pointers. One at the beginning, one in the middle and one at the end. 
//I will require 2 for loops or while loop in a for loop?
//Will sort the original array
//Need logic to decide when to move each of the pointers. 
//If nums[left-pointer] equals 0, you can stop the loops. Since the sum has to equal 0, it can't equal 0 if the left most pointer isn't negative. 
var threeSum = function(nums) {
    
    let finalArr = [];
    //check length of array
    
    if (nums.length < 3){
        return finalArr;
    }
    
    //sort array
    
    nums.sort((a,b) => a-b);
    // console.log('nums: ', nums);
    
        
    for (let l = 0; l < nums.length-2; l++){
        
        // console.log('index: ', l, ' index-1: ', l-1);
        // console.log('nums[l]: ', nums[l], ' nums[l-1]: ', nums[l-1]);
        
        if (nums[l] !== nums[l-1]){
            // console.log('in if, starting loops');
            let m = l+1;
            let r = nums.length-1;
            // console.log('m: ', m);
            // console.log('r: ', r);
            // console.log('nums[m]: ', nums[m]);
            // console.log('nums[r]: ', nums[r]);
        
            while (m < r){
                let sum = nums[l] + nums[m] + nums[r];
                if (sum === 0){
                    // console.log('pushing arr: ', [nums[l], nums[m], nums[r]]);
                    finalArr.push([nums[l], nums[m], nums[r]]);

                    while (nums[m] === nums[m+1]){
                        // console.log('m in while: ', m);
                        m++;
                    }
                    while (nums[r] === nums[r-1]){
                        // console.log('r in while: ', r);
                        r--;
                    }

                    m++;
                    r--;

                }
                
                else if (sum < 0){
                    m++;
                }

                else if (sum > 0){
                    r--;
                }

                
            }
        }
        
    }
    
    // console.log('set after loops: ', finalArr);
    
    return finalArr;
};

Runtime: 258 ms, faster than 39.72% of JavaScript online submissions for 3Sum.
Memory Usage: 53 MB, less than 37.93% of JavaScript online submissions for 3Sum.
