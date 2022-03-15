/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    
    let x = 0;
    let y = nums.length-1;
    let temp;
    
    while (x < y){
        if (nums[x] % 2 !== 0){
            if (nums[y] % 2 === 0){
                temp = nums[x];
                nums[x] = nums[y];
                nums[y] = temp;
                y--;
                x++;
            } else{
                y--;
            }
        } else{
            x++;
        }
        
    }
    
    return nums;
    
};
