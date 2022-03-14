/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let x = 0;
    let y = 1; 
    let temp;
    
    while (y < nums.length){
        if (nums[x] === 0 && nums[x] !== nums[y]){
            temp = nums[x];
            nums[x] = nums[y];
            nums[y] = temp;
            x++;
            y++;
        } else if(nums[x] !== 0){
            x++;
            y++;
        } else{
            y++;
        }
    }
    
    
    
};
