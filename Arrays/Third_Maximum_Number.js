/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    
    let first = 0;
    let second;
    let third;
    
    
    for (let x = 0; x < nums.length; x++){
        if (x === 0){
            first = nums[x];
        }
        
        else if (nums[x] !== first && nums[x] !== second && nums[x] !== third){
            if (nums[x] > first){
                third = second;            
                second = first;
                first = nums[x];
            }
            else if (nums[x] > second || second === undefined){
                third = second;
                second = nums[x];
            }
            else if (nums[x] > third || third === undefined){
                third = nums[x];
            }
        }
        
    }
    
    if (third !== undefined){
        return third;
    }
    
    else{
        return first;
    }
    
};
