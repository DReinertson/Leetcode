/**
 * @param {number[]} nums
 * @return {number[]}
 */

//1. If there are more than one 0s in nums, the result is an array consisting of all 0.
//2. If there is a single 0 in nums, then the result is an array consisting of all 0 except at the index where there was 0 in nums, which will contain product of rest of array.
//3. If there's no 0 in nums, then the result is an array ans where ans[i] = prod / nums[i] (prod = product of all elements in nums).

//too many for loops. 
var productExceptSelf = function(nums) {
    
    let product;
    let finalArr = [];
    let count = 0;
    
    if (nums.includes(0)){
        let noZeros = nums.filter(function(val){
            return val !== 0;
        })
        
        if (noZeros.length === 0){
            return nums;
        }
        product = noZeros.reduce(function(a,b){
            return a*b;
        })
        
        
        //count the 0s
        for (let y in nums){
            if (nums[y] === 0){
                count++;
            }
        }
        
        
        for (let z in nums){
            if (count > 1 || nums[z] !== 0){
                finalArr[z] = 0;
            } else{
                finalArr[z] = product;
            }
        }
    } else{
        product = nums.reduce(function(a,b){
            return a*b;
        })
        
        for (let x in nums){
            finalArr[x] = product / nums[x];
        }
        
        
    }
    return finalArr;
    
    
    
};

Runtime: 236 ms, faster than 12.70% of JavaScript online submissions for Product of Array Except Self.
Memory Usage: 61.6 MB, less than 5.19% of JavaScript online submissions for Product of Array Except Self.
